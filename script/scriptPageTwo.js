const returnToMainPage = document.querySelector('#companyLogo')
returnToMainPage.addEventListener('click', ()=>{
    window.location.pathname = './index.html'
})

const eventsStore = [
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      description: "Being an INFJ",
      date: new Date(2024, 2, 23, 15),
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title:
        "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      description: "New York AI Users",
      date: new Date(2024, 2, 23, 11, 30),
      image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      description: "New Jersey Business Network",
      date:  new Date(2024, 2, 16, 14),
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      category: "Technology",
      distance: 10,
    },
    {
      title: "Dump writing group weekly meetup",
      description: "Dump writing group",
      date: new Date(2024, 2, 13, 11),
      image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 77,
      category: "Business",
      distance: 100,
    },
    {
      title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 140,
      category: "Social Activities",
      distance: 74,
    },
    {
      title: "All Nations - Manhattan Missions Church Bible Study",
      description: "Manhattan Bible Study Meetup Group",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      category: "Health and Wellbeing",
      distance: 15,
    },
  ];
  

  // formate date in Array
    function formatedDate (date){
        const optionsOne = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            timeZone: 'UTC'
        }
        const optionsTwo = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'UTC'
        }
        const a =  date.toLocaleString('en-US', optionsOne).toUpperCase() 
        const b = date.toLocaleString('en-US', optionsTwo).toUpperCase() 
        return `${a} · ${b} UTC`   
    }
   

//create event element

  const  eventsNear =  document.querySelector('.eventsNear')
  function createEvent () {
    const eventsContainer = document.createElement('div')
    eventsContainer.classList.add('eventsContainer')

    const eventPicture =  document.createElement('img')
    eventPicture.src = eventsStore[0].image
    eventPicture.classList.add('picture')

    const dateEvent =  document.createElement('p')
    dateEvent.textContent = formatedDate(eventsStore[0].date) 
    dateEvent.classList.add('dateEvent')

    const eventName = document.createElement('h3')
    eventName.textContent = eventsStore[0].title
    eventName.classList.add('title')

    const eventCategory = document.createElement('p')
    eventCategory.textContent = `${eventsStore[0].category} (${eventsStore[0].distance} km)`
    eventCategory.classList.add('category')

    const eventAttendees = document.createElement('p')
    eventAttendees.textContent = `${eventsStore[0].attendees} attendees`
    eventAttendees.classList.add('attendees')





    eventsContainer.append(eventPicture, dateEvent,eventName,eventCategory,eventAttendees)
    eventsNear.append(eventsContainer)
  }
  createEvent()