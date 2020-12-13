const $viewportBackground = document.body;

var blueWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "blueWizBackgroundColor")    
}

var greyWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "greyWizBackgroundColor")    
}

var redWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "redWizBackgroundColor")    
}

const $whiteBackground = document.getElementById("whiteBackground");

//pc blueWiz

//archie placeholder
const $blueWizArmPcAttackLeft = document.getElementById("blueWizArmPcAttackLeft");
const $blueWizArmPcAttackRight = document.getElementById("blueWizArmPcAttackRight");
const $blueWizArmPcDefaultLeft = document.getElementById("blueWizArmPcDefaultLeft");
const $blueWizArmPcDefaultRight = document.getElementById("blueWizArmPcDefaultRight");
const $blueWizArmPcDefendLeft = document.getElementById("blueWizArmPcDefendLeft");
const $blueWizArmPcDefendRight = document.getElementById("blueWizArmPcDefendRight");
const $blueWizArmPcClenchLeft = document.getElementById("blueWizArmPcClenchLeft");
const $blueWizArmPcClenchRight = document.getElementById("blueWizArmPcClenchRight");
const $blueWizPcWithoutArmsOrArchimedes = document.getElementById("blueWizPcWithoutArmsOrArchimedes");
const $magicMissile_0PcLeft = document.getElementById("magicMissile_0PcLeft");
const $magicMissile_0PcRight = document.getElementById("magicMissile_0PcRight");
const $magicMissile_1PcLeft = document.getElementById("magicMissile_1PcLeft");
const $magicMissile_1PcRight = document.getElementById("magicMissile_1PcRight");
const $magicMissile_2PcLeft = document.getElementById("magicMissile_2PcLeft");
const $magicMissile_2PcRight = document.getElementById("magicMissile_2PcRight");
const $magicMissile_3PcLeft = document.getElementById("magicMissile_3PcLeft");
const $magicMissile_3PcRight = document.getElementById("magicMissile_3PcRight");
const $magicMissileCondensation_0PcLeft = document.getElementById("magicMissileCondensation_0PcLeft");
const $magicMissileCondensation_0PcRight = document.getElementById("magicMissileCondensation_0PcRight");
const $magicMissileCondensation_1PcLeft = document.getElementById("magicMissileCondensation_1PcLeft");
const $magicMissileCondensation_1PcRight = document.getElementById("magicMissileCondensation_1PcRight");
const $magicMissileCondensation_2PcLeft = document.getElementById("magicMissileCondensation_2PcLeft");
const $magicMissileCondensation_2PcRight = document.getElementById("magicMissileCondensation_2PcRight");
const $magicMissileCondensation_3PcLeft = document.getElementById("magicMissileCondensation_3PcLeft");
const $magicMissileCondensation_3PcRight = document.getElementById("magicMissileCondensation_3PcRight");
const $magicMissileCondensation_4PcLeft = document.getElementById("magicMissileCondensation_4PcLeft");
const $magicMissileCondensation_4PcRight = document.getElementById("magicMissileCondensation_4PcRight");
const $magicMissileCondensation_5PcLeft = document.getElementById("magicMissileCondensation_5PcLeft");
const $magicMissileCondensation_5PcRight = document.getElementById("magicMissileCondensation_5PcRight");
const $magicMissilePcDefendedLeft = document.getElementById("magicMissilePcDefendedLeft");
const $magicMissilePcDefendedRight = document.getElementById("magicMissilePcDefendedRight");
const $magicMissileSplosionPcDefendedLeft = document.getElementById("magicMissileSplosionPcDefendedLeft");
const $magicMissileSplosionPcDefendedRight = document.getElementById("magicMissileSplosionPcDefendedRight");
const $magicMissileSplosionPcLeft = document.getElementById("magicMissileSplosionPcLeft");
const $magicMissileSplosionPcRight = document.getElementById("magicMissileSplosionPcRight");
const $star_0PcLeft = document.getElementById("star_0PcLeft");
const $star_0PcRight = document.getElementById("star_0PcRight");
const $star_1PcLeft = document.getElementById("star_1PcLeft");
const $star_1PcRight = document.getElementById("star_1PcRight");
const $star_2PcLeft = document.getElementById("star_2PcLeft");
const $star_2PcRight = document.getElementById("star_2PcRight");
const $star_3PcLeft = document.getElementById("star_3PcLeft");
const $star_3PcRight = document.getElementById("star_3PcRight");
const $star_4PcLeft= document.getElementById("star_4PcLeft");
const $star_4PcRight= document.getElementById("star_4PcRight");

//npc blueWiz

//archie placeholder
const $blueWizArmNpcAttackLeft = document.getElementById("blueWizArmNpcAttackLeft");
const $blueWizArmNpcAttackRight = document.getElementById("blueWizArmNpcAttackRight");
const $blueWizArmNpcDefaultLeft = document.getElementById("blueWizArmNpcDefaultLeft");
const $blueWizArmNpcDefaultRight = document.getElementById("blueWizArmNpcDefaultRight");
const $blueWizArmNpcDefendLeft = document.getElementById("blueWizArmNpcDefendLeft");
const $blueWizArmNpcDefendRight = document.getElementById("blueWizArmNpcDefendRight");
const $blueWizArmNpcClenchLeft = document.getElementById("blueWizArmNpcClenchLeft");
const $blueWizArmNpcClenchRight = document.getElementById("blueWizArmNpcClenchRight");
const $blueWizNpcWithoutArmsOrArchimedes = document.getElementById("blueWizNpcWithoutArmsOrArchimedes");
const $magicMissile_0NpcLeft = document.getElementById("magicMissile_0NpcLeft");
const $magicMissile_0NpcRight = document.getElementById("magicMissile_0NpcRight");
const $magicMissile_1NpcLeft = document.getElementById("magicMissile_1NpcLeft");
const $magicMissile_1NpcRight = document.getElementById("magicMissile_1NpcRight");
const $magicMissile_2NpcLeft = document.getElementById("magicMissile_2NpcLeft");
const $magicMissile_2NpcRight = document.getElementById("magicMissile_2NpcRight");
const $magicMissile_3NpcLeft = document.getElementById("magicMissile_3NpcLeft");
const $magicMissile_3NpcRight = document.getElementById("magicMissile_3NpcRight");
const $magicMissileCondensation_0NpcLeft = document.getElementById("magicMissileCondensation_0NpcLeft");
const $magicMissileCondensation_0NpcRight = document.getElementById("magicMissileCondensation_0NpcRight");
const $magicMissileCondensation_1NpcLeft = document.getElementById("magicMissileCondensation_1NpcLeft");
const $magicMissileCondensation_1NpcRight = document.getElementById("magicMissileCondensation_1NpcRight");
const $magicMissileCondensation_2NpcLeft = document.getElementById("magicMissileCondensation_2NpcLeft");
const $magicMissileCondensation_2NpcRight = document.getElementById("magicMissileCondensation_2NpcRight");
const $magicMissileCondensation_3NpcLeft = document.getElementById("magicMissileCondensation_3NpcLeft");
const $magicMissileCondensation_3NpcRight = document.getElementById("magicMissileCondensation_3NpcRight");
const $magicMissileCondensation_4NpcLeft = document.getElementById("magicMissileCondensation_4NpcLeft");
const $magicMissileCondensation_4NpcRight = document.getElementById("magicMissileCondensation_4NpcRight");
const $magicMissileCondensation_5NpcLeft = document.getElementById("magicMissileCondensation_5NpcLeft");
const $magicMissileCondensation_5NpcRight = document.getElementById("magicMissileCondensation_5NpcRight");
const $magicMissileNpcDefendedLeft = document.getElementById("magicMissileNpcDefendedLeft");
const $magicMissileNpcDefendedRight = document.getElementById("magicMissileNpcDefendedRight");
const $magicMissileSplosionNpcDefendedLeft = document.getElementById("magicMissileSplosionNpcDefendedLeft");
const $magicMissileSplosionNpcDefendedRight = document.getElementById("magicMissileSplosionNpcDefendedRight");
const $magicMissileSplosionNpcLeft = document.getElementById("magicMissileSplosionNpcLeft");
const $magicMissileSplosionNpcRight = document.getElementById("magicMissileSplosionNpcRight");
const $star_0NpcLeft = document.getElementById("star_0NpcLeft");
const $star_0NpcRight = document.getElementById("star_0NpcRight");
const $star_1NpcLeft = document.getElementById("star_1NpcLeft");
const $star_1NpcRight = document.getElementById("star_1NpcRight");
const $star_2NpcLeft = document.getElementById("star_2NpcLeft");
const $star_2NpcRight = document.getElementById("star_2NpcRight");
const $star_3NpcLeft = document.getElementById("star_3NpcLeft");
const $star_3NpcRight = document.getElementById("star_3NpcRight");
const $star_4NpcLeft= document.getElementById("star_4NpcLeft");
const $star_4NpcRight= document.getElementById("star_4NpcRight");

//pc greyWiz

const $greyWizArmPcDefaultLeft = document.getElementById("greyWizArmPcDefaultLeft");
const $greyWizArmPcDefaultRight = document.getElementById("greyWizArmPcDefaultRight");
const $greyWizArmPcDefendLeft = document.getElementById("greyWizArmPcDefendLeft");
const $greyWizArmPcDefendRight = document.getElementById("greyWizArmPcDefendRight");
const $greyWizPcWithoutArms = document.getElementById("greyWizPcWithoutArms");

//npc greyWiz

const $greyWizArmNpcDefaultLeft = document.getElementById("greyWizArmNpcDefaultLeft");
const $greyWizArmNpcDefaultRight = document.getElementById("greyWizArmNpcDefaultRight");
const $greyWizArmNpcDefendLeft = document.getElementById("greyWizArmNpcDefendLeft");
const $greyWizArmNpcDefendRight = document.getElementById("greyWizArmNpcDefendRight");
const $greyWizNpcWithoutArms = document.getElementById("greyWizNpcWithoutArms");

//pc redWiz

const $redWizPcDefendLeft = document.getElementById("redWizPcDefendLeft");
const $redWizPcDefendRight = document.getElementById("redWizPcDefendRight");
const $redWizPc = document.getElementById("redWizPc");
const $redWizPcStruckLeft = document.getElementById("redWizPcStruckLeft");
const $redWizPcStruckRight = document.getElementById("redWizPcStruckRight");

//npc redWiz

const $redWizNpcDefendLeft = document.getElementById("redWizNpcDefendLeft");
const $redWizNpcDefendRight = document.getElementById("redWizNpcDefendRight");
const $redWizNpc = document.getElementById("redWizNpc");
const $redWizNpcStruckLeft = document.getElementById("redWizNpcStruckLeft");
const $redWizNpcStruckRight = document.getElementById("redWizNpcStruckRight");

var init = () => {
    $whiteBackground.setAttribute("class", "visible")    
}

//Initial Character Setup And Final Removal

var setSceneWithBluePc = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "visible")
    $blueWizPcWithoutArmsOrArchimedes.setAttribute("class", "visible")
}

var cleanSceneOfBluePc = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
    $blueWizPcWithoutArmsOrArchimedes.setAttribute("class", "hidden")
}

var setSceneWithBlueNpc = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "visible")    
    $blueWizNpcWithoutArmsOrArchimedes.setAttribute("class", "visible")
}

var cleanSceneOfBlueNpc = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $blueWizNpcWithoutArmsOrArchimedes.setAttribute("class", "hidden")
}

var setSceneWithGreyPc = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcWithoutArms.setAttribute("class", "visible")    
}

var cleanSceneOfGreyPc = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
}

var setSceneWithGreyNpc = () => {   
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
}

var cleanSceneOfGreyNpc = () => {
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
}

var setSceneWithRedPc = () => {
    $redWizPc.setAttribute("class", "visible")    
}

var cleanSceneOfRedPc = () => {
    $redWizPc.setAttribute("class", "hidden")    
}

var setSceneWithRedNpc = () => {
    $redWizNpc.setAttribute("class", "visible")
}

var cleanSceneOfRedNpc = () => {
    $redWizNpc.setAttribute("class", "hidden")
}

//pc blueWiz

var blueWizPcDefendsLeft = () => {
    $blueWizArmPcDefendLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizPcDefendsRight = () => {
    $blueWizArmPcDefendRight.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
}

var blueWizPcAttacksLeft = () => {
    $blueWizArmPcAttackLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizPcAttacksRight = () => {
    $blueWizArmPcAttackRight.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
}

var blueWizPcClenchsLeft = () => {
    $blueWizArmPcClenchLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "hidden")    
}

var blueWizPcClenchsRight = () => {
    $blueWizArmPcClenchRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "hidden")    
}

var blueWizPcRestsArmLeft = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "hidden")  
    $blueWizArmPcDefendLeft.setAttribute("class", "hidden")   
}

var blueWizPcRestsArmRight = () => {
    $blueWizArmPcDefaultRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "hidden") 
    $blueWizArmPcDefendRight.setAttribute("class", "hidden")    
}

var magicMissileFiresPcLeft = () => {
    $magicMissile_0PcLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "visible")
    $blueWizArmPcClenchLeft.setAttribute("class", "hidden")
    $magicMissileCondensation_5PcLeft.setAttribute("class", "hidden")
}

var magicMissileFiresPcRight = () => {
    $magicMissile_0PcRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "visible")
    $blueWizArmPcClenchRight.setAttribute("class", "hidden")
    $magicMissileCondensation_5PcRight.setAttribute("class", "hidden")
}

var magicMissileFires2PcLeft = () => {
    $magicMissile_1PcLeft.setAttribute("class", "visible")
    $magicMissile_0PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires2PcRight = () => {
    $magicMissile_1PcRight.setAttribute("class", "visible")
    $magicMissile_0PcRight.setAttribute("class", "hidden")    
}

var magicMissileFires3PcLeft = () => {
    $magicMissile_2PcLeft.setAttribute("class", "visible")
    $magicMissile_1PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires3PcRight = () => {
    $magicMissile_2PcRight.setAttribute("class", "visible")
    $magicMissile_1PcRight.setAttribute("class", "hidden")    
}

var magicMissileFires4PcLeft = () => {
    $magicMissile_3PcLeft.setAttribute("class", "visible")
    $magicMissile_2PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires4PcRight = () => {
    $magicMissile_3PcRight.setAttribute("class", "visible")
    $magicMissile_2PcRight.setAttribute("class", "hidden")    
}

var magicMissileCondensesPcLeft = () => {
    $magicMissileCondensation_0PcLeft.setAttribute("class", "visible")
    $star_4PcLeft.setAttribute("class", "hidden")
}

var magicMissileCondensesPcRight = () => {
    $magicMissileCondensation_0PcRight.setAttribute("class", "visible")
    $star_4PcRight.setAttribute("class", "hidden")
}

var magicMissileCondenses2PcLeft = () => {
    $magicMissileCondensation_1PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_0PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses2PcRight = () => {
    $magicMissileCondensation_1PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_0PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses3PcLeft = () => {
    $magicMissileCondensation_2PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_1PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses3PcRight = () => {
    $magicMissileCondensation_2PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_1PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses4PcLeft = () => {
    $magicMissileCondensation_3PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_2PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses4PcRight = () => {
    $magicMissileCondensation_3PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_2PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses5PcLeft = () => {
    $magicMissileCondensation_4PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_3PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses5PcRight = () => {
    $magicMissileCondensation_4PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_3PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses6PcLeft = () => {
    $magicMissileCondensation_5PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_4PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses6PcRight = () => {
    $magicMissileCondensation_5PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_4PcRight.setAttribute("class", "hidden")        
}

var magicMissilePcDeflectedLeft = () => {
    $magicMissilePcDefendedLeft.setAttribute("class", "visible")
    $magicMissile_3PcLeft.setAttribute("class", "hidden")
}

var magicMissilePcDeflectedRight = () => {
    $magicMissilePcDefendedRight.setAttribute("class", "visible")
    $magicMissile_3PcRight.setAttribute("class", "hidden")
}

var magicMissileExplodesPcDeflectedLeft = () => {
    $magicMissileSplosionPcDefendedLeft.setAttribute("class", "visible")
    $magicMissilePcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplodesPcDeflectedRight = () => {
    $magicMissileSplosionPcDefendedRight.setAttribute("class", "visible")
    $magicMissilePcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcDefendedLeft = () => {
    $magicMissileSplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcDefendedRight = () => {
    $magicMissileSplosionPcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplodesPcLeft = () => {
    $magicMissile_3PcLeft.setAttribute("class", "hidden")    
    $magicMissileSplosionPcLeft.setAttribute("class", "visible")    
}

var magicMissileExplodesPcRight = () => {
    $magicMissile_3PcRight.setAttribute("class", "hidden")
    $magicMissileSplosionPcRight.setAttribute("class", "visible")    
}

var magicMissileExplosionDissipatesPcLeft = () => {
    $magicMissileSplosionPcLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcRight = () => {
    $magicMissileSplosionPcRight.setAttribute("class", "hidden")
}

var starFormsPcLeft = () => {
    $star_0PcLeft.setAttribute("class", "visible")
}

var starFormsPcRight = () => {
    $star_0PcRight.setAttribute("class", "visible")
}

var starForms2PcLeft = () => {
    $star_1PcLeft.setAttribute("class", "visible")
    $star_0PcLeft.setAttribute("class", "hidden")
}

var starForms2PcRight = () => {
    $star_1PcRight.setAttribute("class", "visible")
    $star_0PcRight.setAttribute("class", "hidden")
}

var starForms3PcLeft = () => {
    $star_2PcLeft.setAttribute("class", "visible")
    $star_1PcLeft.setAttribute("class", "hidden")
}

var starForms3PcRight = () => {
    $star_2PcRight.setAttribute("class", "visible")
    $star_1PcRight.setAttribute("class", "hidden")
}

var starForms4PcLeft = () => {
    $star_3PcLeft.setAttribute("class", "visible")
    $star_2PcLeft.setAttribute("class", "hidden")
}

var starForms4PcRight = () => {
    $star_3PcRight.setAttribute("class", "visible")
    $star_2PcRight.setAttribute("class", "hidden")
}

var starForms5PcLeft = () => {
    $star_4PcLeft.setAttribute("class", "visible")
    $star_3PcLeft.setAttribute("class", "hidden")
}

var starForms5PcRight = () => {
    $star_4PcRight.setAttribute("class", "visible")
    $star_3PcRight.setAttribute("class", "hidden")
}

//npc blueWiz

var blueWizNpcDefendsLeft = () => {
    $blueWizArmNpcDefendLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")     
}

var blueWizNpcDefendsRight = () => {
    $blueWizArmNpcDefendRight.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")  
}

var blueWizNpcAttacksLeft = () => {
    $blueWizArmNpcAttackLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizNpcAttacksRight = () => {
    $blueWizArmNpcAttackRight.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")
}

var blueWizNpcClenchsLeft = () => {
    $blueWizArmNpcClenchLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "hidden")
    $magicMissileCondensation_5NpcLeft.setAttribute("class", "hidden")
}

var blueWizNpcClenchsRight = () => {
    $blueWizArmNpcClenchRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "hidden")
    $magicMissileCondensation_5NpcRight.setAttribute("class", "hidden")    
}

var blueWizNpcRestsArmLeft = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "hidden")
    $blueWizArmNpcDefendLeft.setAttribute("class", "hidden")     
}

var blueWizNpcRestsArmRight = () => {
    $blueWizArmNpcDefaultRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "hidden")
    $blueWizArmNpcDefendRight.setAttribute("class", "hidden")     
}

var magicMissileFiresNpcLeft = () => {
    $magicMissile_0NpcLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "visible")
    $blueWizArmNpcClenchLeft.setAttribute("class", "hidden")
}

var magicMissileFiresNpcRight = () => {
    $magicMissile_0NpcRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "visible")
    $blueWizArmNpcClenchRight.setAttribute("class", "hidden")
}

var magicMissileFires2NpcLeft = () => {
    $magicMissile_1NpcLeft.setAttribute("class", "visible")
    $magicMissile_0NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires2NpcRight = () => {
    $magicMissile_1NpcRight.setAttribute("class", "visible")
    $magicMissile_0NpcRight.setAttribute("class", "hidden")    
}

var magicMissileFires3NpcLeft = () => {
    $magicMissile_2NpcLeft.setAttribute("class", "visible")
    $magicMissile_1NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires3NpcRight = () => {
    $magicMissile_2NpcRight.setAttribute("class", "visible")
    $magicMissile_1NpcRight.setAttribute("class", "hidden")    
}

var magicMissileFires4NpcLeft = () => {
    $magicMissile_3NpcLeft.setAttribute("class", "visible")
    $magicMissile_2NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires4NpcRight = () => {
    $magicMissile_3NpcRight.setAttribute("class", "visible")
    $magicMissile_2NpcRight.setAttribute("class", "hidden")    
}

var magicMissileCondensesNpcLeft = () => {
    $magicMissileCondensation_0NpcLeft.setAttribute("class", "visible")
    $star_4NpcLeft.setAttribute("class", "hidden")
}

var magicMissileCondensesNpcRight = () => {
    $magicMissileCondensation_0NpcRight.setAttribute("class", "visible")
    $star_4NpcRight.setAttribute("class", "hidden")
}

var magicMissileCondenses2NpcLeft = () => {
    $magicMissileCondensation_1NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_0NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses2NpcRight = () => {
    $magicMissileCondensation_1NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_0NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses3NpcLeft = () => {
    $magicMissileCondensation_2NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_1NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses3NpcRight = () => {
    $magicMissileCondensation_2NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_1NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses4NpcLeft = () => {
    $magicMissileCondensation_3NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_2NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses4NpcRight = () => {
    $magicMissileCondensation_3NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_2NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses5NpcLeft = () => {
    $magicMissileCondensation_4NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_3NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses5NpcRight = () => {
    $magicMissileCondensation_4NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_3NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses6NpcLeft = () => {
    $magicMissileCondensation_5NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_4NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses6NpcRight = () => {
    $magicMissileCondensation_5NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_4NpcRight.setAttribute("class", "hidden")        
}

var magicMissileNpcDeflectedLeft = () => {
    $magicMissileNpcDefendedLeft.setAttribute("class", "visible")
    $magicMissile_3NpcLeft.setAttribute("class", "hidden")
}

var magicMissileNpcDeflectedRight = () => {
    $magicMissileNpcDefendedRight.setAttribute("class", "visible")
    $magicMissile_3NpcRight.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcDeflectedLeft = () => {
    $magicMissileSplosionNpcDefendedLeft.setAttribute("class", "visible")
    $magicMissileNpcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcDeflectedRight = () => {
    $magicMissileSplosionNpcDefendedRight.setAttribute("class", "visible")
    $magicMissileNpcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcDefendedLeft = () => {
    $magicMissileSplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcDefendedRight = () => {
    $magicMissileSplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcLeft = () => {
    $magicMissile_3NpcLeft.setAttribute("class", "hidden")    
    $magicMissileSplosionNpcLeft.setAttribute("class", "visible")    
}

var magicMissileExplodesNpcRight = () => {
    $magicMissile_3NpcRight.setAttribute("class", "hidden")
    $magicMissileSplosionNpcRight.setAttribute("class", "visible")    
}

var magicMissileExplosionDissipatesNpcLeft = () => {
    $magicMissileSplosionNpcLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcRight = () => {
    $magicMissileSplosionNpcRight.setAttribute("class", "hidden")
}

var starFormsNpcLeft = () => {
    $star_0NpcLeft.setAttribute("class", "visible")
}

var starFormsNpcRight = () => {
    $star_0NpcRight.setAttribute("class", "visible")
}

var starForms2NpcLeft = () => {
    $star_1NpcLeft.setAttribute("class", "visible")
    $star_0NpcLeft.setAttribute("class", "hidden")
}

var starForms2NpcRight = () => {
    $star_1NpcRight.setAttribute("class", "visible")
    $star_0NpcRight.setAttribute("class", "hidden")
}

var starForms3NpcLeft = () => {
    $star_2NpcLeft.setAttribute("class", "visible")
    $star_1NpcLeft.setAttribute("class", "hidden")
}

var starForms3NpcRight = () => {
    $star_2NpcRight.setAttribute("class", "visible")
    $star_1NpcRight.setAttribute("class", "hidden")
}

var starForms4NpcLeft = () => {
    $star_3NpcLeft.setAttribute("class", "visible")
    $star_2NpcLeft.setAttribute("class", "hidden")
}

var starForms4NpcRight = () => {
    $star_3NpcRight.setAttribute("class", "visible")
    $star_2NpcRight.setAttribute("class", "hidden")
}

var starForms5NpcLeft = () => {
    $star_4NpcLeft.setAttribute("class", "visible")
    $star_3NpcLeft.setAttribute("class", "hidden")
}

var starForms5NpcRight = () => {
    $star_4NpcRight.setAttribute("class", "visible")
    $star_3NpcRight.setAttribute("class", "hidden")
}

//pc greyWiz

var greyWizPcDefendsLeft = () => {
    $greyWizArmPcDefendLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")     
}

var greyWizPcDefendsRight = () => {
    $greyWizArmPcDefendRight.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")  
}

var greyWizPcRestsArmLeft = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefendLeft.setAttribute("class", "hidden")     
}

var greyWizPcRestsArmRight = () => {
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizArmPcDefendRight.setAttribute("class", "hidden")     
}

//npc greyWiz

var greyWizNpcDefendsLeft = () => {
    $greyWizArmNpcDefendLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")     
}

var greyWizNpcDefendsRight = () => {
    $greyWizArmNpcDefendRight.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")  
}

var greyWizNpcRestsArmLeft = () => {
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefendLeft.setAttribute("class", "hidden")     
}

var greyWizNpcRestsArmRight = () => {
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizArmNpcDefendRight.setAttribute("class", "hidden")     
}

//pc redWiz

var redWizPcDefendsLeft = () => {
    $redWizPcDefendLeft.setAttribute("class", "visible")
}

var redWizPcDefendsRight = () => {
    $redWizPcDefendRight.setAttribute("class", "visible")
}

var redWizPcRestsLeft = () => {    
    $redWizPcDefendLeft.setAttribute("class", "hidden")     
}

var redWizPcRestsRight = () => {    
    $redWizPcDefendRight.setAttribute("class", "hidden")     
}

var redWizPcStruckLeft = () => {
    $redWizPc.setAttribute("class", "hidden")
    $redWizPcDefendRight.setAttribute("class", "hidden")
    $redWizPcStruckLeft.setAttribute("class", "visible")
}

var redWizPcStruckRight = () => {
    $redWizPc.setAttribute("class", "hidden")
    $redWizPcDefendLeft.setAttribute("class", "hidden")
    $redWizPcStruckRight.setAttribute("class", "visible")
}

var redWizPcRegainsComposureLeft = () => {
    $redWizPc.setAttribute("class", "visible")
    $redWizPcStruckLeft.setAttribute("class", "hidden")
}

var redWizPcRegainsComposureRight = () => {
    $redWizPc.setAttribute("class", "visible")
    $redWizPcStruckRight.setAttribute("class", "hidden")
}

//npc redWiz

var redWizNpcDefendsLeft = () => {
    $redWizNpcDefendLeft.setAttribute("class", "visible")
}

var redWizNpcDefendsRight = () => {
    $redWizNpcDefendRight.setAttribute("class", "visible")
}

var redWizNpcRestsLeft = () => {    
    $redWizNpcDefendLeft.setAttribute("class", "hidden")     
}

var redWizNpcRestsRight = () => {    
    $redWizNpcDefendRight.setAttribute("class", "hidden")     
}

var redWizNpcStruckLeft = () => {
    $redWizNpc.setAttribute("class", "hidden")
    $redWizNpcDefendRight.setAttribute("class", "hidden")
    $redWizNpcStruckLeft.setAttribute("class", "visible")
}

var redWizNpcStruckRight = () => {
    $redWizNpc.setAttribute("class", "hidden")
    $redWizNpcDefendLeft.setAttribute("class", "hidden")
    $redWizNpcStruckRight.setAttribute("class", "visible")
}

var redWizNpcRegainsComposureLeft = () => {
    $redWizNpc.setAttribute("class", "visible")
    $redWizNpcStruckLeft.setAttribute("class", "hidden")
}

var redWizNpcRegainsComposureRight = () => {
    $redWizNpc.setAttribute("class", "visible")
    $redWizNpcStruckRight.setAttribute("class", "hidden")
}

window.onload = init;

// bluePcDefendLeftBlueNpcAttackLeft

setTimeout(blueWizPcBackground, 32008+1);
setTimeout(setSceneWithBluePc, 32008+2);
setTimeout(setSceneWithBlueNpc, 32008+3);
setTimeout(blueWizPcDefendsLeft, 32008+500);
setTimeout(blueWizNpcAttacksLeft, 32008+1000);
setTimeout(starFormsNpcLeft, 32008+1250);
setTimeout(starForms2NpcLeft, 32008+1500);
setTimeout(starForms3NpcLeft, 32008+1750);
setTimeout(starForms4NpcLeft, 32008+2000);
setTimeout(starForms5NpcLeft, 32008+2250);
setTimeout(magicMissileCondensesNpcLeft, 32008+2750);
setTimeout(magicMissileCondenses2NpcLeft, 32008+3000);
setTimeout(magicMissileCondenses3NpcLeft, 32008+3250);
setTimeout(magicMissileCondenses4NpcLeft, 32008+3500);
setTimeout(magicMissileCondenses5NpcLeft, 32008+3750);
setTimeout(magicMissileCondenses6NpcLeft, 32008+4000);
setTimeout(blueWizNpcClenchsLeft, 32008+4500);
setTimeout(magicMissileFiresNpcLeft, 32008+5000);
setTimeout(magicMissileFires2NpcLeft, 32008+5400);
setTimeout(magicMissileFires3NpcLeft, 32008+5800);
setTimeout(magicMissileFires4NpcLeft, 32008+6200);
setTimeout(magicMissileNpcDeflectedLeft, 32008+6600);
setTimeout(blueWizNpcRestsArmLeft, 32008+6650);
setTimeout(magicMissileExplodesNpcDeflectedLeft, 32008+7000);
setTimeout(blueWizPcRestsArmLeft, 32008+7400);
setTimeout(magicMissileExplosionDissipatesNpcDefendedLeft, 32008+8000);
setTimeout(cleanSceneOfBluePc, 32008+8001);
setTimeout(cleanSceneOfBlueNpc, 32008+8002);

// bluePcAttackLeftBlueNpcDefendLeft

// setTimeout(setSceneWithBluePc, 1);
// setTimeout(setSceneWithBlueNpc, 2);
// setTimeout(blueWizNpcDefendsLeft, 500);
// setTimeout(blueWizPcAttacksLeft, 1000);
// setTimeout(starFormsPcLeft, 1250);
// setTimeout(starForms2PcLeft, 1500);
// setTimeout(starForms3PcLeft, 1750);
// setTimeout(starForms4PcLeft, 2000);
// setTimeout(starForms5PcLeft, 2250);
// setTimeout(magicMissileCondensesPcLeft, 8002+2750);
// setTimeout(magicMissileCondenses2PcLeft, 8002+3000);
// setTimeout(magicMissileCondenses3PcLeft, 8002+3250);
// setTimeout(magicMissileCondenses4PcLeft, 8002+3500);
// setTimeout(magicMissileCondenses5PcLeft, 8002+3750);
// setTimeout(magicMissileCondenses6PcLeft, 8002+4000);
// setTimeout(blueWizPcClenchsLeft, 8002+4500);
// setTimeout(magicMissileFiresPcLeft, 8002+5000);
// setTimeout(magicMissileFires2PcLeft, 8002+5400);
// setTimeout(magicMissileFires3PcLeft, 8002+5800);
// setTimeout(magicMissileFires4PcLeft, 8002+6200);
// setTimeout(magicMissilePcDeflectedLeft, 8002+6600);
// setTimeout(blueWizPcRestsArmLeft, 8002+6650);
// setTimeout(magicMissileExplodesPcDeflectedLeft, 8002+7000);
// setTimeout(blueWizNpcRestsArmLeft, 8002+7400);
// setTimeout(magicMissileExplosionDissipatesPcDefendedLeft, 8002+8000);
// setTimeout(cleanSceneOfBluePc, 8002+8001);
// setTimeout(cleanSceneOfBlueNpc, 8002+8002);

// bluePcAttackRightBlueNpcDefendRight

setTimeout(blueWizPcBackground, 8002+1);
setTimeout(setSceneWithBluePc, 8002+2);
setTimeout(setSceneWithBlueNpc, 8002+3);
setTimeout(blueWizNpcDefendsRight, 8002+500);
setTimeout(blueWizPcAttacksRight, 8002+1000);
setTimeout(starFormsPcRight, 8002+1250);
setTimeout(starForms2PcRight, 8002+1500);
setTimeout(starForms3PcRight, 8002+1750);
setTimeout(starForms4PcRight, 8002+2000);
setTimeout(starForms5PcRight, 8002+2250);
setTimeout(magicMissileCondensesPcRight, 8002+2750);
setTimeout(magicMissileCondenses2PcRight, 8002+3000);
setTimeout(magicMissileCondenses3PcRight, 8002+3250);
setTimeout(magicMissileCondenses4PcRight, 8002+3500);
setTimeout(magicMissileCondenses5PcRight, 8002+3750);
setTimeout(magicMissileCondenses6PcRight, 8002+4000);
setTimeout(blueWizPcClenchsRight, 8002+4500);
setTimeout(magicMissileFiresPcRight, 8002+5000);
setTimeout(magicMissileFires2PcRight, 8002+5400);
setTimeout(magicMissileFires3PcRight, 8002+5800);
setTimeout(magicMissileFires4PcRight, 8002+6200);
setTimeout(magicMissilePcDeflectedRight, 8002+6600);
setTimeout(blueWizPcRestsArmRight, 8002+6650);
setTimeout(magicMissileExplodesPcDeflectedRight, 8002+7000);
setTimeout(blueWizNpcRestsArmRight, 8002+7400);
setTimeout(magicMissileExplosionDissipatesPcDefendedRight, 8002+8000);
setTimeout(cleanSceneOfBluePc, 8002+8001);
setTimeout(cleanSceneOfBlueNpc, 8002+8002);

// bluePcAttackLeftGreyNpcDefendLeft

setTimeout(blueWizPcBackground, 1);
setTimeout(setSceneWithBluePc, 2);
setTimeout(setSceneWithGreyNpc, 3);
setTimeout(greyWizNpcDefendsLeft, 500);
setTimeout(blueWizPcAttacksLeft, 1000);
setTimeout(starFormsPcLeft, 1250);
setTimeout(starForms2PcLeft, 1500);
setTimeout(starForms3PcLeft, 1750);
setTimeout(starForms4PcLeft, 2000);
setTimeout(starForms5PcLeft, 2250);
setTimeout(magicMissileCondensesPcLeft, 2750);
setTimeout(magicMissileCondenses2PcLeft, 3000);
setTimeout(magicMissileCondenses3PcLeft, 3250);
setTimeout(magicMissileCondenses4PcLeft, 3500);
setTimeout(magicMissileCondenses5PcLeft, 3750);
setTimeout(magicMissileCondenses6PcLeft, 4000);
setTimeout(blueWizPcClenchsLeft, 4500);
setTimeout(magicMissileFiresPcLeft, 5000);
setTimeout(magicMissileFires2PcLeft, 5400);
setTimeout(magicMissileFires3PcLeft, 5800);
setTimeout(magicMissileFires4PcLeft, 6200);
setTimeout(magicMissilePcDeflectedLeft, 6600);
setTimeout(blueWizPcRestsArmLeft, 6650);
setTimeout(magicMissileExplodesPcDeflectedLeft, 7000);
setTimeout(greyWizNpcRestsArmLeft, 7400);
setTimeout(magicMissileExplosionDissipatesPcDefendedLeft, 8000);
setTimeout(cleanSceneOfBluePc, 8001);
setTimeout(cleanSceneOfGreyNpc, 8002);

// bluePcAttackRightGreyNpcDefendRight

// setTimeout(setSceneWithBluePc, 1);
// setTimeout(setSceneWithGreyNpc, 2);
// setTimeout(greyWizNpcDefendsRight, 500);
// setTimeout(blueWizPcAttacksRight, 1000);
// setTimeout(starFormsPcRight, 1250);
// setTimeout(starForms2PcRight, 1500);
// setTimeout(starForms3PcRight, 1750);
// setTimeout(starForms4PcRight, 2000);
// setTimeout(starForms5PcRight, 2250);
// setTimeout(magicMissileCondensesPcRight, 2750);
// setTimeout(magicMissileCondenses2PcRight, 3000);
// setTimeout(magicMissileCondenses3PcRight, 3250);
// setTimeout(magicMissileCondenses4PcRight, 3500);
// setTimeout(magicMissileCondenses5PcRight, 3750);
// setTimeout(magicMissileCondenses6PcRight, 4000);
// setTimeout(blueWizPcClenchsRight, 4500);
// setTimeout(magicMissileFiresPcRight, 5000);
// setTimeout(magicMissileFires2PcRight, 5400);
// setTimeout(magicMissileFires3PcRight, 5800);
// setTimeout(magicMissileFires4PcRight, 6200);
// setTimeout(magicMissilePcDeflectedRight, 6600);
// setTimeout(blueWizPcRestsArmRight, 6650);
// setTimeout(magicMissileExplodesPcDeflectedRight, 7000);
// setTimeout(greyWizNpcRestsArmRight, 7400);
// setTimeout(magicMissileExplosionDissipatesPcDefendedRight, 8000);
// setTimeout(cleanSceneOfBluePc, 8001);
// setTimeout(cleanSceneOfGreyNpc, 8002);

// bluePcAttackLeftRedNpcDefendLeft

// setTimeout(setSceneWithBluePc, 16004+1);
// setTimeout(setSceneWithRedNpc, 16004+2);
// setTimeout(redWizNpcDefendsLeft, 16004+500);
// setTimeout(blueWizPcAttacksLeft, 16004+1000);
// setTimeout(starFormsPcLeft, 16004+1250);
// setTimeout(starForms2PcLeft, 16004+1500);
// setTimeout(starForms3PcLeft, 16004+1750);
// setTimeout(starForms4PcLeft, 16004+2000);
// setTimeout(starForms5PcLeft, 16004+2250);
// setTimeout(magicMissileCondensesPcLeft, 16004+2750);
// setTimeout(magicMissileCondenses2PcLeft, 16004+3000);
// setTimeout(magicMissileCondenses3PcLeft, 16004+3250);
// setTimeout(magicMissileCondenses4PcLeft, 16004+3500);
// setTimeout(magicMissileCondenses5PcLeft, 16004+3750);
// setTimeout(magicMissileCondenses6PcLeft, 16004+4000);
// setTimeout(blueWizPcClenchsLeft, 16004+4500);
// setTimeout(magicMissileFiresPcLeft, 16004+5000);
// setTimeout(magicMissileFires2PcLeft, 16004+5400);
// setTimeout(magicMissileFires3PcLeft, 16004+5800);
// setTimeout(magicMissileFires4PcLeft, 16004+6200);
// setTimeout(magicMissilePcDeflectedLeft, 16004+6600);
// setTimeout(blueWizPcRestsArmLeft, 16004+6650);
// setTimeout(magicMissileExplodesPcDeflectedLeft, 16004+7000);
// setTimeout(redWizNpcRestsLeft, 16004+7400);
// setTimeout(magicMissileExplosionDissipatesPcDefendedLeft, 16004+8000);
// setTimeout(cleanSceneOfBluePc, 16004+8001);
// setTimeout(cleanSceneOfRedNpc, 16004+8002);

// bluePcAttackLeftRedNpcDefendRight

setTimeout(blueWizPcBackground, 16004+1);
setTimeout(setSceneWithBluePc, 16004+2);
setTimeout(setSceneWithRedNpc, 16004+3);
setTimeout(redWizNpcDefendsRight, 16004+500);
setTimeout(blueWizPcAttacksLeft, 16004+1000);
setTimeout(starFormsPcLeft, 16004+1250);
setTimeout(starForms2PcLeft, 16004+1500);
setTimeout(starForms3PcLeft, 16004+1750);
setTimeout(starForms4PcLeft, 16004+2000);
setTimeout(starForms5PcLeft, 16004+2250);
setTimeout(magicMissileCondensesPcLeft, 16004+2750);
setTimeout(magicMissileCondenses2PcLeft, 16004+3000);
setTimeout(magicMissileCondenses3PcLeft, 16004+3250);
setTimeout(magicMissileCondenses4PcLeft, 16004+3500);
setTimeout(magicMissileCondenses5PcLeft, 16004+3750);
setTimeout(magicMissileCondenses6PcLeft, 16004+4000);
setTimeout(blueWizPcClenchsLeft, 16004+4500);
setTimeout(magicMissileFiresPcLeft, 16004+5000);
setTimeout(magicMissileFires2PcLeft, 16004+5400);
setTimeout(magicMissileFires3PcLeft, 16004+5800);
setTimeout(magicMissileFires4PcLeft, 16004+6200);
setTimeout(magicMissileExplodesPcLeft, 16004+6600); 
setTimeout(redWizNpcStruckLeft,16004+6601);
setTimeout(blueWizPcRestsArmLeft, 16004+6650);
setTimeout(magicMissileExplosionDissipatesPcLeft, 16004+7780);
setTimeout(redWizNpcRegainsComposureLeft, 16004+8000);
setTimeout(cleanSceneOfBluePc, 16004+8001);
setTimeout(cleanSceneOfRedNpc, 16004+8002);

// bluePcAttackRightRedNpcDefendLeft

// setTimeout(setSceneWithBluePc, 16004+1);
// setTimeout(setSceneWithRedNpc, 16004+2);
// setTimeout(redWizNpcDefendsLeft, 16004+500);
// setTimeout(blueWizPcAttacksRight, 16004+1000);
// setTimeout(starFormsPcRight, 16004+1250);
// setTimeout(starForms2PcRight, 16004+1500);
// setTimeout(starForms3PcRight, 16004+1750);
// setTimeout(starForms4PcRight, 16004+2000);
// setTimeout(starForms5PcRight, 16004+2250);
// setTimeout(magicMissileCondensesPcRight, 16004+2750);
// setTimeout(magicMissileCondenses2PcRight, 16004+3000);
// setTimeout(magicMissileCondenses3PcRight, 16004+3250);
// setTimeout(magicMissileCondenses4PcRight, 16004+3500);
// setTimeout(magicMissileCondenses5PcRight, 16004+3750);
// setTimeout(magicMissileCondenses6PcRight, 16004+4000);
// setTimeout(blueWizPcClenchsRight, 16004+4500);
// setTimeout(magicMissileFiresPcRight, 16004+5000);
// setTimeout(magicMissileFires2PcRight, 16004+5400);
// setTimeout(magicMissileFires3PcRight, 16004+5800);
// setTimeout(magicMissileFires4PcRight, 16004+6200);
// setTimeout(magicMissileExplodesPcRight, 16004+6600); 
// setTimeout(redWizNpcStruckRight,16004+6601);
// setTimeout(blueWizPcRestsArmRight, 16004+6650);
// setTimeout(magicMissileExplosionDissipatesPcRight, 16004+7780);
// setTimeout(redWizNpcRegainsComposureRight, 16004+8000);
// setTimeout(cleanSceneOfBluePc, 16004+8001);
// setTimeout(cleanSceneOfRedNpc, 16004+8002);

// setTimeout(, );

//bluePcAttackRightRedNpcDefendRight

// setTimeout(setSceneWithBluePc, 16004+1);
// setTimeout(setSceneWithRedNpc, 16004+2);
// setTimeout(redWizNpcDefendsRight, 16004+500);
// setTimeout(blueWizPcAttacksRight, 16004+1000);
// setTimeout(starFormsPcRight, 16004+1250);
// setTimeout(starForms2PcRight, 16004+1500);
// setTimeout(starForms3PcRight, 16004+1750);
// setTimeout(starForms4PcRight, 16004+2000);
// setTimeout(starForms5PcRight, 16004+2250);
// setTimeout(magicMissileCondensesPcRight, 16004+2750);
// setTimeout(magicMissileCondenses2PcRight, 16004+3000);
// setTimeout(magicMissileCondenses3PcRight, 16004+3250);
// setTimeout(magicMissileCondenses4PcRight, 16004+3500);
// setTimeout(magicMissileCondenses5PcRight, 16004+3750);
// setTimeout(magicMissileCondenses6PcRight, 16004+4000);
// setTimeout(blueWizPcClenchsRight, 16004+4500);
// setTimeout(magicMissileFiresPcRight, 16004+5000);
// setTimeout(magicMissileFires2PcRight, 16004+5400);
// setTimeout(magicMissileFires3PcRight, 16004+5800);
// setTimeout(magicMissileFires4PcRight, 16004+6200);
// setTimeout(magicMissilePcDeflectedRight, 16004+6600);
// setTimeout(blueWizPcRestsArmRight, 16004+6650);
// setTimeout(magicMissileExplodesPcDeflectedRight, 16004+7000);
// setTimeout(redWizNpcRestsRight, 16004+7400);
// setTimeout(magicMissileExplosionDissipatesPcDefendedRight, 16004+8000);
// setTimeout(cleanSceneOfBluePc, 16004+8001);
// setTimeout(cleanSceneOfRedNpc, 16004+8002);

// greyPcDefendLeftBlueNpcAttackLeft

// setTimeout(setSceneWithGreyPc, 1);
// setTimeout(setSceneWithBlueNpc, 2);
// setTimeout(greyWizPcDefendsLeft, 500);
// setTimeout(blueWizNpcAttacksLeft, 1000);
// setTimeout(starFormsNpcLeft, 1250);
// setTimeout(starForms2NpcLeft, 1500);
// setTimeout(starForms3NpcLeft, 1750);
// setTimeout(starForms4NpcLeft, 2000);
// setTimeout(starForms5NpcLeft, 2250);
// setTimeout(magicMissileCondensesNpcLeft, 2750);
// setTimeout(magicMissileCondenses2NpcLeft, 3000);
// setTimeout(magicMissileCondenses3NpcLeft, 3250);
// setTimeout(magicMissileCondenses4NpcLeft, 3500);
// setTimeout(magicMissileCondenses5NpcLeft, 3750);
// setTimeout(magicMissileCondenses6NpcLeft, 4000);
// setTimeout(blueWizNpcClenchsLeft, 4500);
// setTimeout(magicMissileFiresNpcLeft, 5000);
// setTimeout(magicMissileFires2NpcLeft, 5400);
// setTimeout(magicMissileFires3NpcLeft, 5800);
// setTimeout(magicMissileFires4NpcLeft, 6200);
// setTimeout(magicMissileNpcDeflectedLeft, 6600);
// setTimeout(blueWizNpcRestsArmLeft, 6650);
// setTimeout(magicMissileExplodesNpcDeflectedLeft, 7000);
// setTimeout(greyWizPcRestsArmLeft, 7400);
// setTimeout(magicMissileExplosionDissipatesNpcDefendedLeft, 8000);
// setTimeout(cleanSceneOfGreyPc, 8001);
// setTimeout(cleanSceneOfBlueNpc, 8002);

// greyPcDefendRightBlueNpcAttackRight

setTimeout(greyWizPcBackground, 24006+1);
setTimeout(setSceneWithGreyPc, 24006+2);
setTimeout(setSceneWithBlueNpc, 24006+3);
setTimeout(greyWizPcDefendsRight, 24006+500);
setTimeout(blueWizNpcAttacksRight, 24006+1000);
setTimeout(starFormsNpcRight, 24006+1250);
setTimeout(starForms2NpcRight, 24006+1500);
setTimeout(starForms3NpcRight, 24006+1750);
setTimeout(starForms4NpcRight, 24006+2000);
setTimeout(starForms5NpcRight, 24006+2250);
setTimeout(magicMissileCondensesNpcRight, 24006+2750);
setTimeout(magicMissileCondenses2NpcRight, 24006+3000);
setTimeout(magicMissileCondenses3NpcRight, 24006+3250);
setTimeout(magicMissileCondenses4NpcRight, 24006+3500);
setTimeout(magicMissileCondenses5NpcRight, 24006+3750);
setTimeout(magicMissileCondenses6NpcRight, 24006+4000);
setTimeout(blueWizNpcClenchsRight, 24006+4500);
setTimeout(magicMissileFiresNpcRight, 24006+5000);
setTimeout(magicMissileFires2NpcRight, 24006+5400);
setTimeout(magicMissileFires3NpcRight, 24006+5800);
setTimeout(magicMissileFires4NpcRight, 24006+6200);
setTimeout(magicMissileNpcDeflectedRight, 24006+6600);
setTimeout(blueWizNpcRestsArmRight, 24006+6650);
setTimeout(magicMissileExplodesNpcDeflectedRight, 24006+7000);
setTimeout(greyWizPcRestsArmRight, 24006+7400);
setTimeout(magicMissileExplosionDissipatesNpcDefendedRight, 24006+8000);
setTimeout(cleanSceneOfGreyPc, 24006+8001);
setTimeout(cleanSceneOfBlueNpc, 24006+8002);

// redPcDefendLeftBlueNpcAttackLeft

// setTimeout(setSceneWithRedPc, 1);
// setTimeout(setSceneWithBlueNpc, 2);
// setTimeout(redWizPcDefendsLeft, 500);
// setTimeout(blueWizNpcAttacksLeft, 1000);
// setTimeout(starFormsNpcLeft, 1250);
// setTimeout(starForms2NpcLeft, 1500);
// setTimeout(starForms3NpcLeft, 1750);
// setTimeout(starForms4NpcLeft, 2000);
// setTimeout(starForms5NpcLeft, 2250);
// setTimeout(magicMissileCondensesNpcLeft, 2750);
// setTimeout(magicMissileCondenses2NpcLeft, 3000);
// setTimeout(magicMissileCondenses3NpcLeft, 3250);
// setTimeout(magicMissileCondenses4NpcLeft, 3500);
// setTimeout(magicMissileCondenses5NpcLeft, 3750);
// setTimeout(magicMissileCondenses6NpcLeft, 4000);
// setTimeout(blueWizNpcClenchsLeft, 4500);
// setTimeout(magicMissileFiresNpcLeft, 5000);
// setTimeout(magicMissileFires2NpcLeft, 5400);
// setTimeout(magicMissileFires3NpcLeft, 5800);
// setTimeout(magicMissileFires4NpcLeft, 6200);
// setTimeout(magicMissileNpcDeflectedLeft, 6600);
// setTimeout(blueWizNpcRestsArmLeft, 6650);
// setTimeout(magicMissileExplodesNpcDeflectedLeft, 7000);
// setTimeout(redWizPcRestsLeft, 7400);
// setTimeout(magicMissileExplosionDissipatesNpcDefendedLeft, 8000);
// setTimeout(cleanSceneOfRedPc, 8001);
// setTimeout(cleanSceneOfBlueNpc, 8002);

// redPcDefendLeftBlueNpcAttackRight

setTimeout(redWizPcBackground, 40010+1);
setTimeout(setSceneWithRedPc, 40010+2);
setTimeout(setSceneWithBlueNpc, 40010+3);
setTimeout(redWizPcDefendsLeft, 40010+500);
setTimeout(blueWizNpcAttacksRight, 40010+1000);
setTimeout(starFormsNpcRight, 40010+1250);
setTimeout(starForms2NpcRight, 40010+1500);
setTimeout(starForms3NpcRight, 40010+1750);
setTimeout(starForms4NpcRight, 40010+2000);
setTimeout(starForms5NpcRight, 40010+2250);
setTimeout(magicMissileCondensesNpcRight, 40010+2750);
setTimeout(magicMissileCondenses2NpcRight, 40010+3000);
setTimeout(magicMissileCondenses3NpcRight, 40010+3250);
setTimeout(magicMissileCondenses4NpcRight, 40010+3500);
setTimeout(magicMissileCondenses5NpcRight, 40010+3750);
setTimeout(magicMissileCondenses6NpcRight, 40010+4000);
setTimeout(blueWizNpcClenchsRight, 40010+4500);
setTimeout(magicMissileFiresNpcRight, 40010+5000);
setTimeout(magicMissileFires2NpcRight, 40010+5400);
setTimeout(magicMissileFires3NpcRight, 40010+5800);
setTimeout(magicMissileFires4NpcRight, 40010+6200);
setTimeout(magicMissileExplodesNpcRight, 40010+6600);
setTimeout(redWizPcStruckRight,40010+6601);
setTimeout(blueWizNpcRestsArmRight, 40010+6650);
setTimeout(magicMissileExplosionDissipatesNpcRight, 40010+7780);
setTimeout(redWizPcRegainsComposureRight, 40010+8000);
setTimeout(cleanSceneOfBlueNpc, 40010+8001);
setTimeout(cleanSceneOfRedPc, 40010+8002);

// redPcDefendRightBlueNpcAttackRight

// setTimeout(setSceneWithRedPc, 1);
// setTimeout(setSceneWithBlueNpc, 2);
// setTimeout(redWizPcDefendsRight, 500);
// setTimeout(blueWizNpcAttacksRight, 1000);
// setTimeout(starFormsNpcRight, 1250);
// setTimeout(starForms2NpcRight, 1500);
// setTimeout(starForms3NpcRight, 1750);
// setTimeout(starForms4NpcRight, 2000);
// setTimeout(starForms5NpcRight, 2250);
// setTimeout(magicMissileCondensesNpcRight, 2750);
// setTimeout(magicMissileCondenses2NpcRight, 3000);
// setTimeout(magicMissileCondenses3NpcRight, 3250);
// setTimeout(magicMissileCondenses4NpcRight, 3500);
// setTimeout(magicMissileCondenses5NpcRight, 3750);
// setTimeout(magicMissileCondenses6NpcRight, 4000);
// setTimeout(blueWizNpcClenchsRight, 4500);
// setTimeout(magicMissileFiresNpcRight, 5000);
// setTimeout(magicMissileFires2NpcRight, 5400);
// setTimeout(magicMissileFires3NpcRight, 5800);
// setTimeout(magicMissileFires4NpcRight, 6200);
// setTimeout(magicMissileNpcDeflectedRight, 6600);
// setTimeout(blueWizNpcRestsArmRight, 6650);
// setTimeout(magicMissileExplodesNpcDeflectedRight, 7000);
// setTimeout(redWizPcRestsRight, 7400);
// setTimeout(magicMissileExplosionDissipatesNpcDefendedRight, 8000);
// setTimeout(cleanSceneOfRedPc, 8001);
// setTimeout(cleanSceneOfBlueNpc, 8002);

// setTimeout(, );