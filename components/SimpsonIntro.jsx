const SimpsonsIntro = () => {

    const onMouseEnterEvent = () => {
        const left = document.getElementsByClassName('left')
        const right = document.getElementsByClassName('right')
        const text = document.getElementsByClassName('the-simpsons')

        for(let i= 0; i<= left.length - 1; i++){
            left[i].className += ' to-left'
        }
        for(let i= 0; i<= right.length - 1; i++){
            right[i].className += ' to-right'
        }
        for(let i= 0; i<= text.length - 1; i++){
            text[i].className += ' zoom'
        }
    }

    const onMouseLeaveEvent = () => {
        const left = document.getElementsByClassName('left')
        const right = document.getElementsByClassName('right')
        const text = document.getElementsByClassName('the-simpsons')
        for(let i= 0; i<= left.length - 1; i++){
            if(left[i].classList.contains('to-left')){
                left[i].classList.remove('to-left')
            }
        }
        for(let i= 0; i<= right.length - 1; i++){
            if(right[i].classList.contains('to-right')){
                right[i].classList.remove('to-right')
            }
        }
        for(let i= 0; i<= text.length - 1; i++){
            if(text[i].classList.contains('zoom')){
                text[i].classList.remove('zoom')
            }
        }
    }

    return (
        <div>

<section className="simpsons-intro" onMouseEnter={onMouseEnterEvent} onMouseLeave={onMouseLeaveEvent}>
  <div className="clouds top">
    <div className="cloud-one left"><span className="bubble-one"></span><span className="bubble-two"></span></div>
    <div className="cloud-two left"><span className="bubble-one"></span><span className="bubble-two"></span></div>
    <div className="cloud-three right"><span className="bubble-one"></span><span className="bubble-two"></span></div>
  </div>
  <div className="clouds middle">
    <div className="cloud-four left"><span className="bubble-one"></span><span className="bubble-two"></span></div>
    <div className="cloud-five right"><span className="bubble-one"></span><span className="bubble-two"></span></div>
  </div>
  <div className="clouds bottom">
    <div className="cloud-six right"><span className="bubble-one"></span><span className="bubble-two"></span></div>
    <div className="cloud-seven left"><span className="bubble-one"></span><span className="bubble-two"></span></div>
    <div className="cloud-eight right"><span className="bubble-one"></span><span className="bubble-two"></span></div>
    <div className="cloud-nine left"><span className="bubble-one"></span><span className="bubble-two"></span></div>
  </div>
  <aside className="the-simpsons">
    <p>THE</p>
    <p>SIMPSONS</p>
  </aside>
</section>

</div>
    )
}

export default SimpsonsIntro;