Events.on(CoreChangeEvent, (data) => {
	// FOR SOME UNKNOWN TO MANKIND REASON, core.health does not work for triggering it on core death in multiplayer. So here is cut version of my idea
	LogicFx.get("crossExplosion").effect.at(data.core.x, data.core.y, data.core.hitSize()*5, data.core.team.color);
});
