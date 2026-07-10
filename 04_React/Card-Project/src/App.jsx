import React from 'react';
import Card from './components/card.jsx'

const App = () => {


  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6ae8sAY6zsQcO3SQoRg24Zf712ePeqvGJq0lrOZAHg&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      charges: "$45/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhSOhVxQMORW1hbzj3TeuvPiZNfgzz9erq0eyu1_zjw&s=10",
      companyName: "Apple",
      datePosted: "8 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      charges: "$60/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpeSm5uUjuMJX3_u7Zosid0xmuvYuzrqPFi1gnvlGApQ&s=10",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Remote",
      tag2: "Junior Level",
      charges: "$50/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      charges: "$65/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91gke83AgsjipPMZmrsDP0-K7oWgm4ZCkxZNh9Exo3Q&s=10",
      companyName: "Netflix",
      datePosted: "12 days ago",
      post: "Product Designer",
      tag1: "Contract",
      tag2: "Senior Level",
      charges: "$80/hr",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikGFJR-a0827PjlHAYz5Afmo_7FYLw2JY-2w07VfIYA&s=10",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      charges: "$55/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWum0MOde00Q0xskGIOwZRcetufgdv0mLAZk93tMapdMpSHNEMARXxKpg&s=10",
      companyName: "NVIDIA",
      datePosted: "2 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      charges: "$90/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/330px-Adobe_Acrobat_DC_logo_2020.svg.png",
      companyName: "Adobe",
      datePosted: "7 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      charges: "$58/hr",
      location: "Gurugram, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/735/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      companyName: "Tesla",
      datePosted: "15 days ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      charges: "$40/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPMz9TyQSdDAuvrN4y2YQZ982yRf9dWV_TiBpxdaq-g&s=10",
      companyName: "Oracle",
      datePosted: "4 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Senior Level",
      charges: "$70/hr",
      location: "Mumbai, India"
    }
  ];




  return (
    <div className='parent'>
      {jobOpenings.map (function(elem , idx) {
        return <div key = {idx}>  // ye key react ke understanding ke liye h isse sare cards ko unique identity mil jati h
          <Card brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} charges={elem.charges} location={elem.location} />
        </div>
        })}

    </div>
  )
}

export default App