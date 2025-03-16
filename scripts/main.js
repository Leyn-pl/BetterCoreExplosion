Events.on(CoreChangeEvent, (core) => {
	if(core.core.health <= 0) { // core.core.dead doesn't work for some reason
		LogicFx.get("crossExplosion").effect.at(core.core.x, core.core.y, core.core.hitSize()*5, core.core.team.color);
	};
});