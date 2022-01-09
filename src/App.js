import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="navBar bg-light">
        <nav className="nav justify-content-center p-3">
          <a href="/">
            <li className="navbar-brand">
              <h2>Disruption Lab Information</h2>
            </li>
          </a>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pm" element={<PM />}></Route>
        <Route path="/tl" element={<TL />}></Route>
        <Route path="/ie" element={<IE />}></Route>
        <Route path="/chatbot" element={<CHAT />}></Route>
      </Routes>
      <div className='text-center p-4 bg-light'>
        <strong>© 2022 Disruption Lab. Powered by Gies Business.</strong>
      </div>
    </div>
  );
}

function Home() {
  return(
      <div className="mainArea p-3">
        <div className="firstTitle p-2">
          <h3>Roles</h3>
        </div>
        <div className="top">
          <div className="row justify-content-center">
            <div className="pm col-3">
              <a href="/pm">
              <div className="card">
                <img src="https://www.gooddata.com/img/blog/_1200x630/project-manager-bg.jpg" alt="Project Manager"></img>
              </div>
              <div className="card-body bg-light">
                <h5>Project Manager</h5>
              </div>
              </a>
            </div>
            <div className="tl col-3">
              <a href="/tl">
              <div className="card">
                <img src="https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg" alt="Tech Lead"></img>
              </div>
              <div className="card-body bg-light">
                <h5>Tech Lead</h5>
              </div>
              </a>
            </div>
            <div className="ie col-3">
              <a href="/ie">
              <div className="card">
                <img src="https://content.techgig.com/thumb/msid-84438897,width-860,resizemode-4/7-Things-about-programming-that-every-coder-hates.jpg?214822" alt="Innovation Engineer"></img>
              </div>
              <div className="card-body bg-light">
                <h5>Innovation Engineer</h5>
              </div>
              </a>
            </div>
          </div>
        </div>
        <div className="secondTitle p-2 mt-5">
          <h3>Featured Project</h3>
        </div>
        <div className="bottom">
          <div className="row justify-content-center">
            <div className="chatbot col-3">
                <a href="/chatbot">
                <div className="card">
                  <img src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/what-is-a-chatbot-hero1567113994866165.jpg" alt="Gies Chatbot"></img>
                </div>
                <div className="card-body bg-light">
                  <h5>Gies Chatbot</h5>
                </div>
                </a>
              </div>
          </div>
        </div>
      </div>
  )
}

function PM() {
  return(
    <div className="mainArea p-3">
      <div className="pm row justify-content-center">
        <h3 className='p-2'>Product Manager</h3>
        <div className='col-6'>
          <img src="https://www.gooddata.com/img/blog/_1200x630/project-manager-bg.jpg" width="500" alt="Project Manager"></img>
          <p className='mt-5'>The job of the Product Manager is to work with their team and client in the most effective way possible. They conduct team meetings and client meetings, and ensure that the product is delivered in a timely manner to the client. The PM also handles presentations.</p>
        </div>
      </div>
    </div>
  )
}

function TL() {
  return(
    <div className="mainArea p-3">
      <div className="pm row justify-content-center">
        <h3 className='p-2'>Tech Lead</h3>
        <div className='col-6'>
          <img src="https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg" width="500" alt="Tech Lead"></img>
          <p className='mt-5'>The job of the Tech Lead is to oversee the main technical aspects of the project. They perform code review, approve pull requests, help the IEs resolve technical doubts and help PMs split up the projec t into smaller pieces. Tech Leads also work as Innovation Engineers, though in a smaller capacity.</p>
        </div>
      </div>
    </div>
  )
}

function IE() {
  return(
    <div className="mainArea p-3">
      <div className="pm row justify-content-center">
        <h3 className='p-2'>Innovation Engineer</h3>
        <div className='col-6'>
          <img src="https://content.techgig.com/thumb/msid-84438897,width-860,resizemode-4/7-Things-about-programming-that-every-coder-hates.jpg?214822" width="500" alt="Innovation Engineer"></img>
          <p className='mt-5'>Innovation Engineers work on solving the problem by doing the actual coding. They recieve guidance from their PM and Tech Lead. IEs also present their projects to clients, though they have a smaller role in this regard to the PM.</p>
        </div>
      </div>
    </div>
  )
}

function CHAT() {
  return (
    <div className="mainArea p-3">
      <div className="pm row justify-content-center">
        <h3 className='p-2'>Gies Chatbot</h3>
        <div className='col-6'>
          <img src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/what-is-a-chatbot-hero1567113994866165.jpg" width="500" alt="Gies Chatbot"></img>
          <p className='mt-5'>The Gies Chatbot team created a chatbot that answers students' questions by parsing data in syllabi. Questions such as "When does <i>class x</i> meet?" or "Who is the instructor for <i>class y</i>" can be answered by the bot. The bot was built using NLP technology and an HTML parser. The bot is not yet perfect, but it is well on its way to making an impact on the UIUC community!</p>
        </div>
      </div>
    </div> 
  )
}

export default App;
