class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function(){
            var start = Scene(game)
            game.replaceScene(start)
        })
    }
    draw() {
        // draw labels
        this.game.context.fillText('按 k 开始游戏 ', 100, 100)
    }
}
