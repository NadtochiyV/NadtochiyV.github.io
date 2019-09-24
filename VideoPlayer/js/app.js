const player = new VideoPlayer({
    videoUrl: './video/mountains.mp4',
    videoContainer: 'body',
    volume: 0.5,
});

player.init();

console.log(player);
