import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/face_mainupulation.png'
import IMG2 from '../../assets/image_segmentation.png'
import IMG3 from '../../assets/gnn.png'
import IMG4 from '../../assets/colab.png'
import IMG5 from '../../assets/js.png'
import IMG6 from '../../assets/java_app.png'

const portfolioData = [
  {
    id: 1,
    image: IMG4,
    title: 'Basics of Python and it\'s Libraries',
    github: 'https://github.com/AshikaAnand12/NumPy-TensorFlow-Pytorch-Basics'
  },
  {
    id: 2,
    image: IMG5,
    title: 'JavaScript: Basic Concepts and Data Structures',
    github: 'https://tame-author-e02.notion.site/JavaScript-957bb0348c1246c8bd69c5f175aad58d'
  },
  {
    id: 3,
    image: IMG6,
    title: 'Hotel Reservation management system (Java, ReactJS, MySQL, AWS EC2) ',
    github: 'https://github.com/gopinathsjsu/team-project-the-dementors'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Summary: "Survey of Face Manipulation and Fake Detection"',
    github: 'https://medium.com/@ashika.pobbathi/summary-survey-of-face-manipulation-and-fake-detection-589439b26ca6'
  },
  {
    id: 5,
    image: IMG2,
    title: 'Image Segmentation using Deep Learning — Models and Datasets',
    github: 'https://medium.com/@ashika.pobbathi/image-segmentation-using-deep-learning-models-and-datasets-98609c02a2b6'
  },
  {
    id: 6,
    image: IMG3,
    title: 'Summary: “Review of Graph Neural Network in Text Classification” ',
    github: 'https://medium.com/@ashika.pobbathi/summary-review-of-graph-neural-network-in-text-classification-a183c7c1086'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h3 className='text-light'>My Portflio</h3>
      <h2 className="text-light">
        Blogs, Projects and Notes
      </h2>
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} className="image" alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio