export function soundsPlayer(sound,loop){
    const audio = new Audio(`/sounds/${sound}.mp3`);
    audio.play();
    audio.volume = 1;
    
    audio.loop = loop;
    
}
