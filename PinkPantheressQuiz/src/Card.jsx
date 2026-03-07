import './App.css'
import { useState, useEffect } from 'react'

function Card({ cardNum, showAnswer, isAnimating, animationType }){
    const [currentAnimation, setCurrentAnimation] = useState('')
    
    const lyricsToSpotify = {
        "A flower, I'm growing, wilted today, I choose it To leave you tonight, you don't want it, do you?": "https://open.spotify.com/embed/track/4icnlpI5IbZcRO9mpixVVW?utm_source=generator&theme=0",
        "I had prayed out loud, and Lord, you answered me too early": "https://open.spotify.com/embed/track/3DrkYwyu8QqZQ05r2gGqHi?utm_source=generator&theme=0",
        "So tell me, what did I do to deserve you killin' me this way? I can't lose my life like this, I'll still fight": "https://open.spotify.com/embed/track/5hjhaH0vwtpftiLtF3veZp?utm_source=generator&theme=0",
        "You're a needy guy, but I guess I kind of like that (I like that)": "https://open.spotify.com/embed/track/5rs8M4TwPZEOMXxw3XAo0n?utm_source=generator&theme=0",
        "And when you see me, you walk the other way I guess it's easy to say, you never saw me that day": "https://open.spotify.com/embed/track/0z3YYobsavHguLTgqg5GC1?utm_source=generator&theme=0",
        "I'm tryna be the girl that you're talking to": "https://open.spotify.com/embed/track/5UBfLYnkImP1RKMMy4TGs8?utm_source=generator&theme=0",
        "One day I just wanna hear you say \"I like you\"": "https://open.spotify.com/embed/track/0DwVfCYLrVXgvejYbWwZAd?utm_source=generator&theme=0",
        "You want sex with me? Uh-huh Come talk to me, come on": "https://open.spotify.com/embed/track/5QCfOMH5K7bS4dH7H7PNeI?utm_source=generator&theme=0",
        "Take a look inside your heart, is there any room for me?": "https://open.spotify.com/embed/track/3NanY0K4okhIQzL33U5Ad8?utm_source=generator&theme=0",
        "I'm obsessed with the idea that one day it breaks up, 'Cause after that, I know I'll never be as _______ __ ____": "https://open.spotify.com/embed/track/4bqDgEc3V9o0gle8mvgCgN?utm_source=generator&theme=0"
    }
    
    const lyricsArray = Object.keys(lyricsToSpotify)
    const currentLyric = lyricsArray[cardNum]
    const currentSpotifyEmbed = lyricsToSpotify[currentLyric]

    useEffect(() => {
        if (isAnimating && animationType) {
            setCurrentAnimation(animationType)
            const timer = setTimeout(() => {
                setCurrentAnimation('')
            }, 600) // Animation duration
            return () => clearTimeout(timer)
        }
    }, [isAnimating, animationType])
    
    return(
        <div className={`card ${currentAnimation}`}>
            {!showAnswer ? (
                <h3 className='lyrics'> 🎶 {currentLyric} 🎶</h3>
            ) : (
                <iframe 
                    data-testid="embed-iframe" 
                    style={{borderRadius: '12px'}} 
                    src={currentSpotifyEmbed} 
                    width="100%" 
                    height="352" 
                    frameBorder={0} 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title={`Spotify embed for current song`}
                />
            )}
        </div>
    )
}

export default Card