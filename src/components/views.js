import "./views.css"
import img1 from "../images/outer2.jpg"

export default function Views(){
    return(
             <section className="gallery-section">
        <h2>Here to tell your story through authentic photography.</h2>
        <div className="gallery-grid">
          <img
            src={img1}
            alt="Gallery 1"
          />
          <h1>Hello</h1>
          <img
            src="https://via.placeholder.com/300x400"
            alt="Gallery 5"
          />
          <img
            src="https://via.placeholder.com/300x400"
            alt="Gallery 6"
          />
          <img
            src="https://via.placeholder.com/300x400"
            alt="Gallery 2"
          />
          <img
            src="https://via.placeholder.com/300x400"
            alt="Gallery 3"
          />
          <img
            src="https://via.placeholder.com/300x400"
            alt="Gallery 4"
          /> <img
          src="https://via.placeholder.com/300x400"
          alt="Gallery 7"
        />
         <img
            src="https://via.placeholder.com/300x400"
            alt="Gallery 8"
          />
        </div>
      </section>
    )
}