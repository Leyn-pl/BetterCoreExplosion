Events.on(CoreChangeEvent, (data) => {
    Timer.schedule(() => {
        if (data.core.tile.block() instanceof CoreBlock) {
            return;
        }
        LogicFx.get("crossExplosion").effect.at(data.core.x, data.core.y, 175, data.core.team.color);
    }, 0.2)
});
