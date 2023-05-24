import './App.css'

import * as Image from './assets/images'

function Section1() {
  return (
    <div>
      <div className="wrapper">
        <h1 className="title">James Webb Space Telescope</h1>
        <div className="subtitle">
          <a
            href="https://en.wikipedia.org/wiki/James_Webb_Space_Telescope"
            target="_blank"
          >
            From Wikipedia, the free encyclopedia
          </a>
        </div>
        <div className="image">
          <div className="image-1">
            <img height={300} src={Image.image1} width={300} />
          </div>
        </div>
        <div>
          <p>
            The <b>James Webb Space Telescope (JWST)</b> is a space telescope
            currently conducting infrared astronomy. As the largest optical
            telescope in space, it is equipped with high-resolution and
            high-sensitivity instruments, allowing it to view objects too old,
            distant, or faint for the Hubble Space Telescope. This enables
            investigations across many fields of astronomy and cosmology, such
            as observation of the first stars, the formation of the first
            galaxies, and detailed atmospheric characterization of potentially
            habitable exoplanets.
          </p>
        </div>
      </div>
      <div />
    </div>
  )
}

function Section2() {
  return (
    <div>
      <div className="wrapper">
        <div className="title-2">
          <h2>Location and orbit</h2>
        </div>
        <div>
          <p>
            Webb operates in a halo orbit, circling around a point in space
            known as the Sun–Earth L2 Lagrange point, approximately 1,500,000 km
            (930,000 mi) beyond Earth's orbit around the Sun.
          </p>
        </div>
        <div className="image-2">
          <div>
            <img height={350} src={Image.image2} width={350} />
          </div>
        </div>
        <div>
          <p>
            The telescope circles about the Sun–Earth L2 point in a halo orbit,
            which is inclined with respect to the ecliptic, has a radius varying
            between about 250,000 km (160,000 mi) and 832,000 km (517,000 mi),
            and takes about half a year to complete. Since L2 is just an
            equilibrium point with no gravitational pull, a halo orbit is not an
            orbit in the usual sense: the spacecraft is actually in orbit around
            the Sun, and the halo orbit can be thought of as controlled drifting
            to remain in the vicinity of the L2 point. This requires some
            station-keeping: around 2.5 m/s per year from the total ∆v budget of
            93 m/s. Two sets of thrusters constitute the observatory's
            propulsion system
          </p>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td colSpan={3}>
                  <h2>Animation of James Webb Space Telescope trajectory</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Top view</span>
                </td>
                <td>
                  <span>Side view</span>
                </td>
                <td>
                  <span>Side view from the Sun</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img height={275} width={275} src={Image.image3} />
                </td>
                <td>
                  <img height={275} width={275} src={Image.image4} />
                </td>
                <td>
                  <img height={275} width={275} src={Image.image5} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div />
    </div>
  )
}

function Section3() {
  return (
    <div>
      <div className="wrapper">
        <h2>Scientific instruments</h2>
        <ul>
          <li>NIRSpec (Near Infrared Spectrograph) </li>
          <li>
            FGS/NIRISS (Fine Guidance Sensor and Near Infrared Imager and
            Slitless Spectrograph)
          </li>
          <li>MIRI (Mid-Infrared Instrument) </li>
          <li>NIRCam (Near Infrared Camera)</li>
        </ul>
        <div className="padding-10rem" />
        <div>
          <h2>Partnership</h2>
          <div>
            <p>
              NASA, ESA and CSA have collaborated on the telescope since 1996. A
              total of 258 companies, government agencies, and academic
              institutions participated in the pre-launch project; 142 from the
              United States, 104 from 12 European countries (including 21 from
              the U.K., 16 from France, 12 from Germany and 7 international),
              and 12 from Canada. Other countries as NASA partners, such as
              Australia, were involved in post-launch operation.
            </p>
            <p>Participating countries:</p>
            <ul className="partnership">
              <li>Austria</li>
              <li>Belgium</li>
              <li>Canada</li>
              <li>Czech</li>
              <li>Republic</li>
              <li>Denmark</li>
              <li>Finland</li>
              <li>France</li>
              <li>Germany</li>
              <li>Greece</li>
              <li>Ireland</li>
              <li>Italy</li>
              <li>Luxembourg</li>
              <li>Netherlands</li>
              <li>Norway</li>
              <li>Portugal</li>
              <li>Spain</li>
              <li>Sweden</li>
              <li>Switzerland</li>
              <li>United Kingdom</li>
              <li>United States</li>
            </ul>
          </div>
        </div>
        <div className="padding-10rem" />
        <div>
          <h2>See more images of James Web here</h2>
          <div>
            <ul>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/James_Webb_Space_Telescope"
                  target="_blank"
                >
                  James Webb Space Telescope on Wikipedia
                </a>
              </li>
              <li>
                <a href="https://webbtelescope.org/images" target="_blank">
                  Webb telescope.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div />
    </div>
  )
}

function App() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}

export default App
