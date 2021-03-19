<template>
    <div>
        <img src="../assets/Jobit_logo.png" alt = "Jobit">
        <div id = "topnav"> </div>
        <div id = "lining"> </div>
    </div>

</template>


<script>
export default {
    
}
</script>


<style scoped>

img {
    position: absolute;
    width: 149px;
    height: 71px;
    left: 42px;
    top: 5px;
    z-index: 950;
    background: url(../assets/Jobit_logo.png);
}

#topnav {
    position: absolute;
    width: 1440px;
    height: 78px;
    left: 0px;
    top: 3px;
    background: #FFFFFF;
    box-shadow: 0px 1px 0px #000000;    
    z-index: 900;
}

#lining {
    position: absolute;
    width: 1447px;
    height: 11px;
    left: -7px;
    top: 81px;
    background: #368EA1;
}
</style>