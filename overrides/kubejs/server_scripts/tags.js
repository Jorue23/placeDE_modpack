//priority: 1000
//#region ITEM TAGS
onEvent('item.tags', e => {
  //#region constants
  let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
  let allthemodiumores = ['allthemodium', 'vibranium', 'unobtainium']
  //#endregion
  //#region additions
  allthemodiumores.forEach(item => {
    e.add(`mekanism:clumps/${item}`, `allthemodium:${item}_clump`)
    e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
    e.add(`mekanism:dirty_dusts/${item}`, `allthemodium:dirty_${item}_dust`)
    e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
    e.add(`mekanism:shards/${item}`, `allthemodium:${item}_shard`)
    e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
    e.add(`mekanism:crystals/${item}`, `allthemodium:${item}_crystal`)
    e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
  })
  alltheores.forEach(item => {
    e.add(`mekanism:clumps/${item}`, `alltheores:${item}_clump`)
    e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
    e.add(`mekanism:dirty_dusts/${item}`, `alltheores:dirty_${item}_dust`)
    e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
    e.add(`mekanism:shards/${item}`, `alltheores:${item}_shard`)
    e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
    e.add(`mekanism:crystals/${item}`, `alltheores:${item}_crystal`)
    e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
  })
  e.add('forge:stone', ['quark:deepslate'])
  e.add('forge:marble', '#chisel:marble')
  e.add('chisel:marble', ['astralsorcery:marble_raw', 'enviromats:marble', 'quark:marble'])
  e.add('chisel:limestone', ['create:limestone', 'create:weathered_limestone', 'quark:limestone'])
  e.add('chisel:basalt', ['minecraft:basalt', 'minecraft:polished_basalt'])
  e.add('chisel:sandstone', ['minecraft:sandstone', 'minecraft:chiseled_sandstone', 'minecraft:cut_sandstone', 'minecraft:smooth_sandstone'])
  e.add('chisel:metals/aluminum', 'alltheores:aluminum_block')
  e.add('chisel:metals/bronze', 'thermal:bronze_block')
  e.add('chisel:emerald', 'minecraft:emerald_block')
  e.add('chisel:redstone', 'minecraft:redstone_block')
  e.add('chisel:coal', 'minecraft:coal_block')
  e.add('chisel:charcoal', 'thermal:charcoal_block')
  e.add('chisel:end_stone', 'minecraft:end_stone')
  e.add('forge:ingots/uru', 'kubejs:uru_ingot')
  e.add('forge:nuggets/uru', 'kubejs:uru_nugget')
  e.add('forge:storage_blocks/uru', 'kubejs:uru_block')
  e.add('minecraft:logs_unstripped', '/^.+:(?!stripped_).+_log$/')
  e.add('forge:swords', ['allthemodium:alloy_paxel', 'allthemodium:alloy_sword'])
  e.add('forge:dusts/certus_quartz', ['appliedenergistics2:certus_quartz_dust'])
  e.add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
  e.add('forge:ores', ['#forge:ores/certus_quartz', '#forge:ores/oratchalcum', '#forge:ores/rat_gem', '#forge:ores/dimensionalshard', '#forge:ores/arcane_brick'])
  e.add('forge:plastic', ['#pneumaticcraft:plastic_sheets', 'mekanism:hdpe_sheet'])
  e.add('misctags:biofuel2', ['#minecraft:saplings', '#minecraft:leaves', '#forge:seeds', 'minecraft:dried_kelp', 'minecraft:kelp', 'minecraft:seagrass', 'minecraft:grass'])
  e.add('misctags:biofuel4', ['#forge:fruits', 'minecraft:tall_grass', 'minecraft:nether_sprouts', 'minecraft:dried_kelp_block', 'minecraft:cactus', 'minecraft:sugar_cane', 'minecraft:weeping_vines', 'minecraft:twisting_vines', 'minecraft:vine', 'minecraft:melon_slice', 'byg:skyris_vine', 'byg:embur_gel_vines'])
  e.add('misctags:biofuel5', ['#forge:vegetables', '#forge:cookies', '#forge:flour_plants', '#forge:mushrooms', '#forge:mushroom_stems', '#minecraft:flowers', 'minecraft:lily_pad', 'minecraft:sea_pickle', 'minecraft:shroomlight', 'minecraft:large_fern', 'minecraft:fern', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:carved_pumpkin', 'minecraft:nether_wart', 'minecraft:cocoa_beans'])
  e.add('misctags:biofuel7', ['#minecraft:wart_blocks', '#forge:mushroom_caps', 'minecraft:baked_potato', 'minecraft:hay_block', '#forge:bread'])
  e.add('misctags:biofuel8', ['minecraft:cake', 'minecraft:pumpkin_pie'])
  e.add('forge:axes', 'byg:pendorite_battleaxe')
  e.add('forge:pickaxes', 'allthemodium:alloy_pick')
  e.add('minecraft:stone_tool_materials', ['#forge:stone', '#forge:cobblestone'])
  e.add('minecraft:stone_crafting_materials', ['#forge:stone', '#forge:cobblestone'])
  e.add('appliedenergistics2:nether_quartz_dust', '#forge:dusts/quartz')
  e.add('appliedenergistics2:dusts/nether_quartz', '#forge:dusts/quartz')
  e.add('appliedenergistics2:dusts/quartz', '#forge:dusts/quartz')
  e.add('appliedenergistics2:dusts/ender', '#forge:dusts/ender_pearl')
  e.add('forge:ingots', ['#forge:ingots/unobtainium_allthemodium_alloy', '#forge:ingots/vibranium_unobtainium_alloy', '#forge:ingots/vibranium_allthemodium_alloy', '#forge:ingots/oratchalcum'])
  e.add('forge:sand', ['byg:white_sand', 'byg:black_sand', 'byg:purple_sand', 'byg:blue_sand'])
  e.add('forge:nuggets', '#forge:nuggets/oratchalcum')
  e.add('forge:fruits', 'byg:holly_berries')
  e.add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard')
  e.add('forge:mushroom_caps/black_puff_mushroom', 'byg:black_puff_mushroom_block')
  e.add('forge:mushroom_caps/blue_glowshroom', 'byg:blue_glowshroom_block')
  e.add('forge:mushroom_caps/weeping_milkcap_mushroom', 'byg:weeping_milkcap_mushroom_block')
  e.add('forge:mushroom_caps/green_mushroom', 'byg:green_mushroom_block')
  e.add('forge:mushroom_caps/purple_glowshroom', 'byg:purple_glowshroom_block')
  e.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
  e.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
  e.add('forge:mushroom_stems/brown_mushroom', 'byg:brown_mushroom_stem')
  e.add('forge:mushroom_stems/red_glowshroom', 'byg:red_glowshroom_stem')
  e.add('forge:mushroom_stems/white_mushroom', 'byg:white_mushroom_stem')
  e.add('forge:mushroom_stems/yellow_glowshroom', 'byg:yellow_glowshroom_stem')
  e.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
  e.add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
  e.add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
  e.add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus', 'byg:blue_glowshroom', 'byg:purple_glowshroom'])
  e.add('forge:storage_blocks', '#forge:storage_blocks/uraninite')
  e.add('forge:gems', '#forge:gems/dimensionalshard')
  e.add('misctags:flowers/draconic_flowers', 'minecraft:dragon_egg')
  e.add('misctags:flowers/end_flowers', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
  e.add('misctags:flowers/end_flower', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
  e.add('misctags:flowers/forest_flowers', ['#minecraft:flowers', 'minecraft:sweet_berries'])
  e.add('misctags:flowers/glowing_flowers', ['minecraft:shroomlight', 'minecraft:glowstone', 'minecraft:redstone_lamp'])
  e.add('misctags:flowers/magical_flowers', ['#botania:special_flowers', '#botania:mystical_flowers', '#botania:double_mystical_flowers'])
  e.add('misctags:flowers/nether_flowers', ['minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:nether_wart', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:weeping_vines', 'minecraft:twisting_vines'])
  e.add('misctags:flowers/swamp_flowers', ['byg:tiny_lilypads', 'byg:reeds', 'byg:cattail', 'minecraft:lily_pad', 'minecraft:sugar_cane', 'minecraft:brown_mushroom', 'minecraft:red_mushroom'])
  e.add('misctags:flowers/wither_flowers', 'minecraft:wither_rose')
  e.add('forge:storage_blocks/nether_star', 'allthecompressed:nether_star_block')
  e.add('forge:storage_blocks', ['#forge:storage_blocks/nether_star'])
  e.add('minecraft:wart_blocks', '/.+_wart_block/')
  e.add('forge:axes', ['/.+_axe/', '/.+_paxel/', '/.+:axe_.+/'])
  e.add('forge:pickaxes', ['/.+_pickaxe/', '/.+_paxel/', '/.+:pickaxe_.+/'])
  e.add('forge:shovels', ['/.+_shovel/', '/.+_paxel/', '/.+:shovel_.+/'])
  e.add('forge:swords', ['/.+_sword/', '/.+:sword_.+/'])
  e.add('forge:hoes', ['/.+_hoe/', '/.+:hoe_.+/'])
  e.add('forge:simple_honeycombs', '/^.+:(?!(catnip|rgbee)_).*honeycomb$/')
  e.add('forge:simple_honeycomb_blocks', '/^.+:(?!(catnip|rgbee)_).*honeycomb_block$/')
  e.add('misctags:water/items', ['#forge:water', 'minecraft:water_bucket', 'create:honey_bucket', 'create:chocolate_bucket'])
  e.add('misctags:botany_pots', colors.map(color => `botanypots:${color}_botany_pot`).concat('botanypots:botany_pot'))
  e.add('forge:workbench', 'minecraft:crafting_table')
  e.add('curios:back', 'ironjetpacks:.*_jetpack')
  //#endregion
  //#region removals
  e.remove(`minecraft:small_flowers`, `#botania:special_flowers`)
  e.remove('forge:dyes/yellow', 'mekanism:dust_sulfur')
  e.remove('appliedenergistics2:glass', ['#forge:glass', 'minecraft:glass'])
  e.remove('appliedenergistics2:metal_ingots', ['#forge:ingots/gold', '#forge:ingots/iron'])
  e.remove('appliedenergistics2:wool', '#minecraft:wool')
  e.remove('appliedenergistics2:workbench', 'minecraft:crafting_table')
  e.remove('forge:cheese/silkentofu', 'pamhc2foodextended:silkentofuitem')
  e.remove('forge:chests/personal', 'mekanism:personal_chest')
  e.remove('forge:chests/electric', 'mekanism:personal_chest')
  e.remove('forge:chests', 'mekanism:personal_chest')
  //#endregion
})
//#endregion

//#region BLOCK TAGS
onEvent('block.tags', e => {
  //#region additions
  e.add('forge:storage_blocks/uru', 'kubejs:uru_block')
  e.add('forge:stone', ['quark:deepslate'])
  e.add('forge:marble', '#chisel:marble')
  e.add('chisel:marble', ['astralsorcery:marble_raw', 'enviromats:marble', 'quark:marble'])
  e.add('chisel:limestone', ['create:limestone', 'create:weathered_limestone', 'quark:limestone'])
  e.add('chisel:basalt', ['minecraft:basalt', 'minecraft:polished_basalt'])
  e.add('chisel:sandstone', ['minecraft:sandstone', 'minecraft:chiseled_sandstone', 'minecraft:cut_sandstone', 'minecraft:smooth_sandstone'])
  e.add('chisel:metals/aluminum', 'alltheores:aluminum_block')
  e.add('chisel:metals/bronze', 'thermal:bronze_block')
  e.add('chisel:emerald', 'minecraft:emerald_block')
  e.add('chisel:redstone', 'minecraft:redstone_block')
  e.add('chisel:coal', 'minecraft:coal_block')
  e.add('chisel:charcoal', 'thermal:charcoal_block')
  e.add('chisel:end_stone', 'minecraft:end_stone')
  e.add('forge:ores/certus_quartz', ['appliedenergistics2:quartz_ore', 'appliedenergistics2:charged_quartz_ore'])
  e.add('forge:ores/quartz', '#forge:ores/certus_quartz')
  e.add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
  e.add('forge:ores', ['#forge:ores/certus_quartz', '#forge:ores/oratchalcum', '#forge:ores/rat_gem', '#forge:ores/dimensionalshard', '#forge:ores/arcane_brick'])
  e.add('misctags:no_moving', ['#minecraft:wither_immune', 'appliedenergistics2:cable_bus', 'cookingforblockheads:fridge', /^waystones:/, /^appliedenergistics2:/, /^thermal:/, /^mekanism:/])
  e.add('mekanism:cardboard_blacklist', '#misctags:no_moving')
  e.add('create:brittle', '#misctags:no_moving')
  e.add('misctags:flowers/draconic_flowers', 'minecraft:dragon_egg')
  e.add('misctags:flowers/end_flowers', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
  e.add('misctags:flowers/forest_flowers', ['#minecraft:flowers', 'minecraft:sweet_berry_bush'])
  e.add('misctags:flowers/glowing_flowers', ['minecraft:shroomlight', 'minecraft:glowstone', 'minecraft:redstone_lamp'])
  e.add('misctags:flowers/magical_flowers', ['#botania:special_flowers', '#botania:mystical_flowers', '#botania:double_mystical_flowers'])
  e.add('misctags:flowers/nether_flowers', ['minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:nether_wart', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:weeping_vines', 'minecraft:twisting_vines'])
  e.add('misctags:flowers/swamp_flowers', ['byg:tiny_lilypads', 'byg:reeds', 'byg:cattail', 'minecraft:lily_pad', 'minecraft:sugar_cane', 'minecraft:brown_mushroom', 'minecraft:red_mushroom'])
  e.add('misctags:flowers/wither_flowers', 'minecraft:wither_rose')
  e.add('forge:mushroom_caps/black_puff_mushroom', 'byg:black_puff_mushroom_block')
  e.add('forge:mushroom_caps/blue_glowshroom', 'byg:blue_glowshroom_block')
  e.add('forge:mushroom_caps/weeping_milkcap_mushroom', 'byg:weeping_milkcap_mushroom_block')
  e.add('forge:mushroom_caps/green_mushroom', 'byg:green_mushroom_block')
  e.add('forge:mushroom_caps/purple_glowshroom', 'byg:purple_glowshroom_block')
  e.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
  e.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
  e.add('forge:mushroom_stems/brown_mushroom', 'byg:brown_mushroom_stem')
  e.add('forge:mushroom_stems/red_glowshroom', 'byg:red_glowshroom_stem')
  e.add('forge:mushroom_stems/white_mushroom', 'byg:white_mushroom_stem')
  e.add('forge:mushroom_stems/yellow_glowshroom', 'byg:yellow_glowshroom_stem')
  e.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
  e.add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
  e.add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
  e.add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus', 'byg:blue_glowshroom', 'byg:purple_glowshroom'])
  e.add('forge:storage_blocks', ['#forge:storage_blocks/uraninite', '#forge:storage_blocks/oratchalcum', '#forge:storage_blocks/nether_star'])
  e.add('forge:storage_blocks/nether_star', 'allthecompressed:nether_star_block')
  e.add('mcwwindows:window', '/mcwwindows:.+_win/')
  e.add('misctags:concrete', '/minecraft:.+_concrete/')
  e.add('buildinggadgets:blacklist/copy_paste', [/^refinedstorage:.+$/, /^windowlogging:.+$/, /^mekanism:.+$/])
  e.add('buildinggadgets:blacklist/building', [/^refinedstorage:.+$/, /^windowlogging:.+$/, /^mekanism:.+$/])
  e.add('forge:workbench', 'minecraft:crafting_table')
  //#endregion
  //#region removals
  e.removeAll('minecraft:enderman_holdable')
  e.remove('forge:chests/personal', 'mekanism:personal_chest')
  e.remove('forge:chests/electric', 'mekanism:personal_chest')
  e.remove('forge:chests', 'mekanism:personal_chest')
  //#endregion
})
//#endregion

//#region FLUID TAGS
onEvent('fluid.tags', e => {
  let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']

  alltheores.forEach(material => {
    e.add(`forge:molten_${material}`, [`alltheores:molten_${material}`, `#tconstruct:molten_${material}`])
    e.add(`tconstruct:metal_like`, `alltheores:molten_${material}`)
  })
  e.add('minecraft:water', ['cofh_core:honey'])
})
//#endregion
