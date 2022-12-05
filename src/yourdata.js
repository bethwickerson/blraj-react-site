import React from 'react'

// import all images and videos
import pic from "./images/balraj.jpg"
// import video1 from "./videos/placeholder.mp4"
import project1 from "./images/work1.jpg"
import project2 from "./images/work2.jpg"
import project3 from "./images/work3.jpg"
import codepen1 from "./images/codepen1.jpg"
import Icon from "./images/icons/unreal.png"


export const yourData = {
  // Please Do Not Remove The comma(,) after every variable)
  // Change The Website Template:
  // ----------------------------------------------------
  // * * * * * * * * * * 
  // ----------------------------------------------------
  // Header Section --------------------------
  headername: "BALRAJ AR DESIGNER",
  // End Header Section -----------------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // Work Section ------------------------
  projects: [
    {
      videoThumb: project1,
      videoTitle: "Project Title",
      paragraph:
        <>
          <p>Description</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775340965?h=825942e541?amp;loop=1",
      // videoSrcURL: video1,
      projectLink: "http://google.com",
    },
    {
      videoThumb: project2,
      videoTitle: "Project Title",
      paragraph:
        <>
          <p>Description</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775356208?h=60e613c2f4?amp;loop=1",
    },
    {
      videoThumb: project3,
      videoTitle: "Project Title",
      paragraph:
        <>
          <p>Description</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775359980?h=e74225c983?amp;loop=1",
    },
  ],
  // End Work Section -----------------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // Promotion Section -----------------------------
  promotionHeading: "Codepen",
  promotionPara:
    <>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </>,
  codepens: [
    {
      heading: "project1",
      paragraph: "description",
      imgUrl: codepen1,
      projectLink: "http://codepen.com",
    },
    {
      heading: "project2",
      paragraph: "description",
      imgUrl: codepen1,
      projectLink: "http://codepen.com",
    },
    {
      heading: "project3",
      paragraph: "description",
      imgUrl: codepen1,
      projectLink: "http://codepen.com",
    },
  ],
  // End Promotion Section -----------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // About Section -------------------------
  aboutParagraph: <>
    <p>Creative technologist with experience in AR, XR, HMDs, product, design, research and writing in ethical and social innovation spaces.</p>
    <p>Specialities include idea development, critical thinking and project management. I continue to expand in the AR, creative and tech spaces by collaborating with creatives and engineers of vast specialities, learning new AR design processes such as Unreal Engine 5, Unity and programming with JavaScript, TypeScript, React, GLSL, SparkSL, p5.js, Three.js, whilst building with Meta Spark AR, Tikok Effect House and Snap Lens Studio.</p>
  </>,
  aboutImage: pic,
  //   End About Section ---------------------
  // ----------------------------------------------------
  // * * * * * * * * * * 
  // ----------------------------------------------------
  // Skills Section --------------------------
  skills: [
    {
      // Import Icons from the top and add name here
      img: Icon,
      title: "Unity",
      para:
        "Deets on my skills in Unity",
      // if you have a skills certificate, link to it
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: Icon,
      title: "Unreal Engine",
      para:
        "Deets on my skills in Unreal Engine",
      // if you have a skills certificate, link to it
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: Icon,
      title: "Javascript",
      para:
        "Deets on my skills in Javascript",
      // if you have a skills certificate, link to it
      url: ""
    },
  ],
  // End Skills Section --------------------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // ---------------------------
  // Contact Section
  contactSubHeading: "Follow me",
  social: [
    // Add Or Remove The Link Accordingly
    {
      // img: codepenIcon,
      title: "Codepen",
      url: "https://codepen.io/bb1100"
    },
    {
      // img: shopIcon,
      title: "Shop",
      url: "https://shop.blraj.com",
    },
    // {
    //   // img: facebookIcon,
    //   title: "Instagram AR Effects",
    //   url: "https://www.facebook.com/sparkarhub/portfolios/ig/balraj_bains/",
    // },
    // {
    //   // img: lensIcon,
    //   title: "snapchat AR lenses",
    //   url: "https://lensstudio.snapchat.com/creator/-D1vojaseAyPOGBDAyvgKw",
    // },
    // {
    //   // img: tiktokIcon,
    //   title: "tiktok AR effects",
    //   url: "https://www.tiktok.com/sticker/Zodiac-Soulmate-1449912?_d=secCgYIASAHKAESPgo8ru6rn1xdW%2FFbp8I55ZLHhoazfnbG%2BQHtgBw5PRwVImOUSPg75sscYSwH2tN8DDCd7pM6BsxkmHXktUcDGgA%3D&_r=1&checksum=68add0078570d09521247fcfebcc5771e184adb9256a8df1f0a10000e89e9767&sec_user_id=MS4wLjABAAAAOBzHU5fuFUgitdBp4mvpb-aRu1ZYmUfYZCFyWbeAMnd_KOEroFosLKinAa5XO_Kp&share_app_id=1233&share_link_id=2DBA453B-AA58-4D79-B684-BF44D57D2F51&share_sticker_id=1449912&social_sharing=v1&source=h5_m&tt_from=more&u_code=d9d55a2fel4f4a&user_id=6762307782470599686&utm_campaign=client_share&utm_medium=ios&utm_source=more",
    // },
  ],
  // End Contact Section ---------------
  // ----------------------------------------------------
  // ----------------------------------------------------
  // * * * * * * * * * * 
  // ----------------------------------------------------
  // Footer Section --------------------------
  name: "Balraj Bains",
  footerlink: "https://balrajbains.wixsite.com/blraj",
  footerlabel: "[See creative archive here]"
  // End Footer Section -----------------------
  // ----------------------------------------------------
}