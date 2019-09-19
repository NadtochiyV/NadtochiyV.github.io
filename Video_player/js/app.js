const player = new VideoPlayer({
    videoUrl: './video/snowboarding.mp4',
    videoContainer: 'body',
    volume: 0.5,
});

player.init();

console.log(player);
