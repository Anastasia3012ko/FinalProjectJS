//to main page

const returnToHomePage = document.querySelector('#companyLogo')
returnToHomePage.addEventListener('click', ()=>{
    window.location.pathname = './index.html'
})

//events array

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
  
// filtered array with events
const typeSelect = document.querySelector('#type')
const distanceSelect = document.querySelector('#distance')
const categorySelect =  document.querySelector('#category')

function filterEvents (array) {
  const type = typeSelect.value
  const distance = distanceSelect.value
  const category = categorySelect.value

  let filteredEvents = array

  if(type !== 'any') {
    filteredEvents = filteredEvents.filter(item => item.type === type)
  }  

  if(distance !== 'any'){
      const [min,max] =distance.split('-').map(Number)
      filteredEvents = filteredEvents.filter(item => {
        if(item.type === 'online') return true
        return item.distance >=min && item.distance <= max
      })
  }
     
  if(category !== 'any') {
    filteredEvents = filteredEvents.filter(item => item.category === category)
  }

  displayEvents.innerHTML = ''

  filteredEvents.forEach(event => {
    createEvent(event)
  })
}

[typeSelect,distanceSelect,categorySelect].forEach(item => {
  item.addEventListener('change', ()=>{
    filterEvents(eventsStore)
  })
})

// formate date in Array

    function formattedDate (date){
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
  const displayEvents = document.createElement('div')
  displayEvents.classList.add('display')
  eventsNear.append(displayEvents)


  function createEvent(event) {
    const eventContainer = document.createElement('div')
    eventContainer.classList.add('eventContainer')
    
    const textContainer = document.createElement('div')
    textContainer.classList.add('textContainer')

    const containerImages = document.createElement('div')
    containerImages.classList.add('containerImages')
    const eventPicture =  document.createElement('img')
    eventPicture.src = event.image
    eventPicture.classList.add('picture')
    containerImages.append(eventPicture)

    if(event.type === 'online'){
      const onlinePicture = document.createElement('img')
      onlinePicture.src = 'images/online.png'
      onlinePicture.classList.add('online')
      containerImages.append(onlinePicture)
    }

    const eventDate =  document.createElement('p')
    eventDate.textContent = formattedDate(event.date) 
    eventDate.classList.add('eventDate')

    const eventName = document.createElement('h3')
    eventName.textContent = event.title
    eventName.classList.add('title')

    const eventCategory = document.createElement('p')
    eventCategory.textContent = `${event.category} (${event.distance} km)`
    eventCategory.classList.add('category')

    if(event.type === 'online'){
      const onlinePictureTwo = document.createElement('img')
      onlinePictureTwo.src = 'images/online.png'
      onlinePictureTwo.classList.add('onlineTwo')
      textContainer.append(onlinePictureTwo)
    }


    const eventAttendees = document.createElement('p')
     if(event.attendees){
      eventAttendees.textContent = `${event.attendees} attendees`
      eventAttendees.classList.add('attendees')
    }
    

    textContainer.append(eventDate,eventName,eventCategory,eventAttendees)
    eventContainer.append(containerImages, textContainer)
    displayEvents.append(eventContainer)
  }
 
  eventsStore.forEach(item => {
    createEvent(item)
  })