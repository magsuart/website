import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import SEO from "../components/seo"

import BackgroundImage from 'gatsby-background-image'

import YoutubeIcon from "../images/svg/youtube.svg"
import InstagramIcon from "../images/svg/instagram.svg"
import MailIcon from "../images/svg/mail.svg"

import portfolio from "../data/portfolio.json"
import skills from "../data/skills.json"
import tags from "../data/tags.json"

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

// import EditToolsIcon from "../images/svg/edit-tools.svg"
// import LayersIcon from "../images/svg/layers.svg"
// import PhotoCameraIcon from "../images/svg/photo-camera.svg"
// import VfxIcon from "../images/svg/vfx.svg"
// import VideoCameraIcon from "../images/svg/video-cameras.svg"

let Isotope

const IndexPage = () => {

  const {
    magsuLogo,
    bgProfile,
    bgPanel,
    allImages
  } = useStaticQuery(query)

  const [iso, setIso] = useState(null)

  const [btnSelected, setBtnSelected] = useState("btnAll")
  const changeBtnSelected = value => {
    setBtnSelected(value)
  }

  const handleTagClick = (event, tag) => {
    changeBtnSelected(event.target.id)

    if (!iso) return
    console.log("Change isotope")
    iso.arrange({ filter: tag })
  }

  const [showDialog, setShowDialog] = useState(false);
  const openModal = () => {
    if (showDialog) return;
    setShowDialog(true)
  }
  const closeModal = () => {
    if (!showDialog) return;
    setShowDialog(false)
    setImageClicked(null)
  };

  const [imageClicked, setImageClicked] = useState(null);
  const changeImageClicked = source => {
    setImageClicked(source)
  }

  useEffect(() => {
    if (!imageClicked) return;
    openModal()
  }, [imageClicked])


  useEffect(() => {

    let images = [...document.querySelectorAll('.gatsby-image-wrapper picture img')]
    console.log(images)
    images.map(item => {
      item.onclick = () => {
        let sourceImg = allImages.edges.find(x => x.node.base === item.alt).node.childImageSharp.fluid
        changeImageClicked(sourceImg)
      }
      return null
    })

    try {
      Isotope = require("isotope-layout/js/isotope")

      console.log("Init isotope")
      let newIso = new Isotope('.masonry', {
        itemSelector: '.card',
      })
      setIso(newIso)

    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <>
      <Dialog
        style={{ width: "90%", height: "90%", padding: "0", margin: "0 auto", background:"transparent" }}
        aria-label="dialog"
        className="dialogBox"
        isOpen={showDialog}
        onClick={closeModal}
        onDismiss={closeModal}
      >
        <Img
          // className="w-full"
          fluid={imageClicked} alt={"Image zoomed"}
        />
      </Dialog>
      <main>
        <SEO />
        <div className="grid grid-cols-12 gap-0 h-auto lg:h-screen">

          {/* Left Panel */}
          <div className="col-span-12 lg:col-span-5 h-auto lg:h-screen bg-gray-300 text-white">
            <BackgroundImage
              className="grid grid-cols-1 h-full gap-10 lg:gap-0"
              fluid={bgProfile.childImageSharp.fluid}
            >

              <div className="col-span-1 text-center lg:text-right py-5 px-10 mt-6 lg:mt-10 lg:mt-0 self-center">
                <div className="flex justify-center lg:justify-end">
                  <Img fixed={magsuLogo.childImageSharp.fixed} />
                </div>
                <p className="text-center lg:text-right pt-3 pb-1" style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.6)" }}>I'm Magsu.art,</p>
                <p className="text-center lg:text-right text-sm" style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.6)" }}>Freelance Creative & Professional Digital artist.</p>
              </div>

              <footer className="col-span-1 self-end py-5 px-10">
                <div className="text-center lg:text-right my-1">
                  <a href="https://www.instagram.com/magsu.art/" name="Instagram" target="_blank" rel="noreferrer"><InstagramIcon className="inline h-6 mx-2" /></a>
                  <a href="https://www.youtube.com/channel/UC_PC4SHLCl-6GD0sXsqkU5w" name="Youtube" target="_blank" rel="noreferrer"><YoutubeIcon className="inline h-8 mx-2" /></a>
                  <a href="https://forms.gle/s8LAs1gH5JTcD6MR7" name="Mail" target="_blank" rel="noreferrer"><MailIcon className="inline h-8 ml-2" /></a>
                </div>
                <p className="text-center lg:text-right text-xs">© <a href="https://magsu.art" name="Magsu.art">Magsu.art</a>{" "}{new Date().getFullYear()}, All rights reserved</p>
              </footer>
            </BackgroundImage>
          </div>

          {/* Right Panel */}
          <div
            className="col-span-12 lg:col-span-7 h-auto lg:h-screen bg-gray-100 lg:overflow-y-scroll px-10 lg:p-16 gap-10"
            style={{ backgroundImage: `url(${bgPanel.childImageSharp.fixed.srcWebp})` }}
          >

            {/* Introduction */}
            <div className="my-6 p-2">
              <h1 className="my-5 lg:mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
              <p className="">Praesent mi arcu, bibendum eget semper ac, maximus sed nisi. Proin at nibh eget urna semper vehicula. Integer pharetra, risus nec molestie blandit, magna nisl pharetra sem.</p>
            </div>

            {/* Skills */}
            <div className="my-6 p-2">
              <div className="grid grid-cols-12 gap-5">
                {skills.map((skill, id) => {
                  return (
                    <div key={id} className="col-span-12 sm:col-span-6 px-2">
                      <h3 className="pb-2">
                        <span role="img" aria-label="Photography">{skill.icon}</span> <span className="underline">{skill.title}</span>
                      </h3>
                      <p className="text-sm">{skill.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <hr />

            {/* Filter tags */}
            <div className="my-4 p-2 text-center">
              {tags.map((item, index) => {
                const { id, value, tag } = item

                return (
                  <button
                    key={index}
                    id={id}
                    onClick={e => handleTagClick(e, tag)}
                    className={`hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3 mb-2 outline-none	${btnSelected === id ? "bg-blue-500" : "bg-red-300"} tagButtons`}>
                    {value}
                  </button>
                )
              })}
            </div>

            {/* Portfolio cards */}
            <div className={`my-4 masonry masonry`}>

              {portfolio.map((item, id) => {

                if (item.fileName) {
                  item.source = allImages.edges.find(x => x.node.base === item.fileName).node.childImageSharp.fluid
                }

                return (
                  <Card
                    key={id}
                    item={item}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

const Card = props => {
  const { item } = props

  return (
    <div className={`card inline-block p-2 item ${item.tagsFilter.join(" ")}`}>
      <div className="bg-gray-100 rounded overflow-hidden shadow-lg mx-auto">

        {item.embed ?
          <iframe title={item.title} width="100%" height="auto" style={{ minHeight: "200px" }} src={item.embed} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          :
          <Img className="w-full" fluid={item.source} alt={item.fileName} />
        }

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <p className="text-gray-700 text-base">{item.description}</p>
        </div>
        <div className="px-6 py-4">
          {item.tags.map((tag, index) => {
            return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
          })}
        </div>
      </div>
    </div>
  )
}

const query = graphql`
  query PortfolioAndSkills {

    allImages: allFile(filter: {relativeDirectory: {eq: "images/portfolio"}}) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(quality: 90, maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }

    magsuLogo: file(relativePath: {eq: "images/magsuart-logo.png"}) {
      childImageSharp {
        fixed(quality: 90, width: 84) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }

    bgProfile: file(relativePath: {eq: "images/background/town.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    bgPanel: file(relativePath: {eq: "images/background/texture.png"}) {
      childImageSharp {
        fixed(quality: 90, width: 400) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export default IndexPage
