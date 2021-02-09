const play_btn = document.getElementById('play-btn')
const pause_btn = document.getElementById('pause-btn')

const previous_btn = document.getElementById('previous-btn')
const next_btn = document.getElementById('next-btn')

const control_btns = document.getElementById('control-btns')

const title_song = document.getElementById('title-song')

let audioObjet = new Audio();
console.log(audioObjet)


const playlist = {
  greenDay: {
    band: 'Green Day',
    dookie: {
      album: 'Dookie',
      year: '1994',
      songs: {
        0: 'Burnout',
        1: 'Having a Blast',
        2: 'Chump',
        3: 'Longview',
        4: 'Welcome To Paradise',
        5: 'Pulling Teeth',
        6: 'Basket Case',
        7: 'She',
        8: 'Sassafras Roots',
        9: 'When I Come Around',
        10: 'Coming Clean',
        11: 'Emenius Sleepus',
        12: 'In the End',
        13: 'F.O.D. / All by Myself'
      },
      src: {
        0: 'audio/dookie/burnout.mp3',
        1: 'audio/dookie/havingABlast.mp3',
        2: 'audio/dookie/chump.mp3',
        3: 'audio/dookie/longview.mp3',
        4: 'audio/dookie/welcomeToParadise.mp3',
        5: 'audio/dookie/pullingteeth.mp3',
        6: 'audio/dookie/basketcase.mp3',
        7: 'audio/dookie/she.mp3',
        8: 'audio/dookie/sassafrasRoots.mp3',
        9: 'audio/dookie/whenIComeAround.mp3',
        10: 'audio/dookie/comingClean.mp3',
        11: 'audio/dookie/emeniusSleepus.mp3',
        12: 'audio/dookie/inTheEnd.mp3',
        13: 'audio/dookie/fod.mp3'
      },
      lirycs: {
        6: `<p>Do you have the time to listen to me whine\
        About nothing and everything all at once?\
        I am one of those\
        Melodramatic fools\
        Neurotic to the bone\
        No doubt about it</p><br/><br>\
        <p>Sometimes I give myself the creeps\
        Sometimes my mind plays tricks on me\
        It all keeps adding up\
        I think I'm cracking up\
        Am I just paranoid\
        Or am I just stoned?\
        I went to a shrink</p><br/><br/>\
        <p>To analyze my dreams\
        She says it's lack of sex that's bringing me down\
        I went to a whore\
        He said my life's a bore\
        So quit my whining 'cause it's bringing her down</p><br/><br/>\
        <p>Sometimes I give myself the creeps\
        Sometimes my mind plays tricks on me\
        It all keeps adding up\
        I think I'm cracking up\
        Am I just paranoid?\
        Ah, yeah, yeah, yeah</p><br/><br/>\
        <p>Grasping to control\
        So I better hold on</p><br/><br/>\
        <p>Sometimes I give myself the creeps\
        Sometimes my mind plays tricks on me\
        It all keeps adding up\
        I think I'm cracking up\
        Am I just paranoid?\
        Or am I just stoned?</p>`
      }
    }
  }
}

let positionPlaylist = 0;
audioObjet.src = playlist.greenDay.dookie.src[positionPlaylist]

window.onload = () => {



  play_btn.addEventListener('click', (e) => {
    e.preventDefault()

    transicionPausePlay(true);
    

    audioObjet.play()
    // audioObjet.play();
    
  })

  pause_btn.addEventListener('click', (e) => {
    e.preventDefault()

    transicionPausePlay(false);
    
    audioObjet.pause()
  })


  previous_btn.addEventListener('click', (e) => {
    e.preventDefault()
    audioObjet.pause()
    transicionPausePlay(false)
    positionPlaylist-= 1
    if(positionPlaylist<0) positionPlaylist = 13;
    audioObjet.src = playlist.greenDay.dookie.src[positionPlaylist]
    audioObjet.play()
    transicionPausePlay(true)
    title_song.textContent = playlist.greenDay.dookie.songs[positionPlaylist]
  })

  next_btn.addEventListener('click', (e) => {
    e.preventDefault()
    audioObjet.pause()
    transicionPausePlay(false)
    positionPlaylist+= 1
    if(positionPlaylist>13) positionPlaylist = 0;
    audioObjet.src = playlist.greenDay.dookie.src[positionPlaylist]
    audioObjet.play()
    transicionPausePlay(true)
    title_song.textContent = playlist.greenDay.dookie.songs[positionPlaylist]
  })
}


function transicionPausePlay(booleano){
  if(booleano){
    pause_btn.classList.remove('hidden')
    play_btn.classList.add('hidden')
  } else {
    play_btn.classList.remove('hidden')
    pause_btn.classList.add('hidden')
  }
}





//   pause_btn.addEventListener('click', () => {
//     audioObjet.pause();
//   })


// }