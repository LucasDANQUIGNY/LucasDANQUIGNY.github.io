function calculateConstruction() {
    let argent = document.getElementById('money').value;

    const materials = {
        "private_house": { "metal": 4, "builder": 4, "wood": 50, "concrete": 170 },
        "office_building": { "metal": 12, "builder": 13, "wood": 400, "concrete": 1500 },
        "trade_center": { "metal": 25, "builder": 90, "wood": 300, "concrete": 3800 },
        "apartement_building": { "metal": 660, "builder": 150, "wood": 2200, "concrete": 30200 },
        "skyscraper": { "metal": 1450, "builder": 800, "wood": 2800, "concrete": 190000 }
    }

    let private_house = 0, office_building = 0, trade_center = 0, apartement_building = 0, skyscraper = 0;
    let metal = 0, builder = 0, wood = 0, concrete = 0;

    skyscraper = Math.floor(argent / 13655150);
    argent -= skyscraper * 13655150;

    apartement_building = Math.floor(argent / 3302560);
    argent -= apartement_building * 3302560;

    trade_center = Math.floor(argent / 543575);
    argent -= trade_center * 543575;

    office_building = Math.floor(argent / 248602);
    argent -= office_building * 248602;

    private_house = Math.floor(argent / 39474);
    argent -= private_house * 39474;

    const construction_quantity = `private_house : ${private_house} / office_building : ${office_building} / trade_center : ${trade_center} / apartement_building : ${apartement_building} / skyscraper : ${skyscraper}`;

    const quantity = {
        "private_house": private_house,
        "office_building": office_building,
        "trade_center": trade_center,
        "apartement_building": apartement_building,
        "skyscraper": skyscraper,
    }

    for (let i in quantity) {
        for (let a = 0; a < quantity[i]; a++) {
            metal += materials[i]["metal"];
            builder += materials[i]["builder"];
            wood += materials[i]["wood"];
            concrete += materials[i]["concrete"];
        }
    }

    const construction_material = `metal : ${metal} / builder : ${builder} / wood : ${wood} / concrete : ${concrete}`;

    document.getElementById('quantity').innerText = construction_quantity;
    document.getElementById('materials').innerText = construction_material;
}
