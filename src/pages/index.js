import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styles from "./index.module.css"

import BackgroundImage from 'gatsby-background-image'

import YoutubeIcon from "../images/svg/youtube.svg"
import InstagramIcon from "../images/svg/instagram.svg"
import MailIcon from "../images/svg/mail.svg"

// import EditToolsIcon from "../images/svg/edit-tools.svg"
// import LayersIcon from "../images/svg/layers.svg"
// import PhotoCameraIcon from "../images/svg/photo-camera.svg"
// import VfxIcon from "../images/svg/vfx.svg"
// import VideoCameraIcon from "../images/svg/video-cameras.svg"

import Isotope from "isotope-layout/js/isotope"

const IndexPage = () => {

  var iso;

  const handleTagClick = tag => {
    console.log("iso", iso)
    if (!iso) return
    console.log("tag", tag)
    iso.arrange({ filter: tag })
  }

  useEffect(() => {
    iso = new Isotope('.masonry', {
      itemSelector: '.card',
    })
  }, [])

  const {
    magsuLogo,
    bgProfile,
    skills,
    portfolio,
    allImages
  } = useStaticQuery(query)

  return (
    <Layout>
      <SEO />
      <div className="grid grid-cols-12 gap-0 h-auto lg:h-screen">

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
                <a href="https://www.instagram.com/magsu.art/" target="_blank" rel="noreferrer"><InstagramIcon className="inline h-6 mx-2" /></a>
                <a href="https://www.youtube.com/channel/UC_PC4SHLCl-6GD0sXsqkU5w" target="_blank" rel="noreferrer"><YoutubeIcon className="inline h-8 mx-2" /></a>
                <a href="https://forms.gle/s8LAs1gH5JTcD6MR7" target="_blank" rel="noreferrer"><MailIcon className="inline h-8 ml-2" /></a>
              </div>
              <p className="text-center lg:text-right text-xs">© <a href="https://magsu.art">Magsu.art</a>{" "}{new Date().getFullYear()}, All rights reserved</p>
            </footer>
          </BackgroundImage>
        </div>

        <div className="col-span-12 lg:col-span-7 h-auto lg:h-screen bg-orange-300 lg:overflow-y-scroll px-10 lg:p-16 gap-10" style={{ backgroundImage: "url('/texture.png')" }}>

          {/* Introduction */}
          <div className="my-6 p-2">
            <h1 className="my-5 lg:mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
            <p className="">Praesent mi arcu, bibendum eget semper ac, maximus sed nisi. Proin at nibh eget urna semper vehicula. Integer pharetra, risus nec molestie blandit, magna nisl pharetra sem.</p>
          </div>

          {/* Skills */}
          <div className="my-6 p-2">
            <div className="grid grid-cols-12 gap-5">
              {skills.edges.map(edge => {
                let SvgIcon;
                switch (edge.node.title) {
                  case "Photography":
                    // SvgIcon = <PhotoCameraIcon className="inline h-6 mr-2" />
                    SvgIcon = <span>📷</span>
                    break;
                  case "Illustration":
                    // SvgIcon = <EditToolsIcon className="inline h-6 mr-2" />
                    SvgIcon = <span>🎨</span>
                    break;
                  case "Video":
                    // SvgIcon = <VideoCameraIcon className="inline h-6 mr-2" />
                    SvgIcon = <span>🎞️</span>
                    break;
                  case "VFX":
                    // SvgIcon = <VfxIcon className="inline h-6 mr-2" />
                    SvgIcon = <span>🎬</span>
                    break;
                  case "3D":
                    // SvgIcon = <LayersIcon className="inline h-6 mr-2" />
                    SvgIcon = <span>🌎</span>
                    break;
                  default:
                    SvgIcon = ""
                    break;
                }
                return (
                  <div key={edge.node.id} className="col-span-12 sm:col-span-6 px-2">
                    <h3 className="pb-2">
                      {SvgIcon} <span className="underline">{edge.node.title}</span>
                    </h3>
                    <p className="text-sm">{edge.node.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <hr />

          {/* Filter tags */}
          <div className="my-4 p-2 text-center">
            <button
              onClick={() => handleTagClick("*")}
              className="m-2 py-1 px-4 text-sm shadow-md border-2 border-solid rounded border-red-300">
              All
            </button>
            <button
              onClick={() => handleTagClick(".Photography")}
              className="m-2 py-1 px-4 text-sm shadow-md border-2 border-solid rounded border-red-200">Photography</button>
            <button
              onClick={() => handleTagClick(".Illustration")}
              className="m-2 py-1 px-4 text-sm shadow-md border-2 border-solid rounded border-red-200">
              Illustration
            </button>
            <button
              onClick={() => handleTagClick(".Video")}
              className="m-2 py-1 px-4 text-sm shadow-md border-2 border-solid rounded border-red-200">
              Video
            </button>
            <button
              onClick={() => handleTagClick(".VFX")}
              className="m-2 py-1 px-4 text-sm shadow-md border-2 border-solid rounded border-red-200">
              VFX
            </button>
            <button
              onClick={() => handleTagClick(".3D")}
              className="m-2 py-1 px-4 text-sm shadow-md border-2 border-solid rounded border-red-200">
              3D
            </button>
          </div>

          {/* Portfolio cards */}
          <div className={`my-4 masonry ${styles.masonry}`}>
            {/* <div className={styles.masonry}> */}
            {portfolio.edges.map(edge => {
              let fileSrc;
              allImages.edges.map(imagesEdge => {
                if (edge.node.fileName === imagesEdge.node.base) {
                  fileSrc = imagesEdge.node.childImageSharp.fluid
                }
                return null;
              })
              return (
                <Card
                  key={edge.node.id}
                  title={edge.node.title}
                  description={edge.node.description}
                  tags={edge.node.tags}
                  source={fileSrc}
                />
              )
            })}
            {/* </div> */}
          </div>
        </div>
      </div>
    </Layout >
  )
}

const Card = props => {
  const { title, description, source, tags } = props;

  return (
    <div className={`card inline-block p-2 ${styles.item} ${tags.join(" ")}`}>
      <div className="bg-gray-100 rounded overflow-hidden shadow-lg mx-auto">
        <Img className="w-full" fluid={source} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => {
            return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
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
            fluid(quality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }

    magsuLogo: file(relativePath: {eq: "images/magsuart-logo.png"}) {
      childImageSharp {
        fixed(quality: 100, width: 84) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }

    bgProfile: file(relativePath: {eq: "images/background/town.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    skills: allSkillsJson {
      edges {
        node {
          id
          description
          title
        }
      }
    }

    portfolio: allPortfolioJson {
      edges {
        node {
          id
          description
          fileName
          title
          tags
        }
      }
    }
  }
`

export default IndexPage
