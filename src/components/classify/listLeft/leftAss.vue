<template>
  <div class="allBox">
    <div class="listFlesh">
      <ul>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
        <li>蔬菜豆菇</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "list"
};
</script>
<style lang="scss" scoped>
.allBox {
  position: relative;
  width: 2rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
 
}
.allBox > .listFlesh {
  position: absolute;
  height: 100%;
  width: 2rem;
  display: flex;
  flex: 1;
  overflow: auto;
  left: 0px;
  top: 0px;
}
.allBox > .listFlesh > ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.allBox > .listFlesh > ul > li {
  width: 100%;
  height: 1rem;
  font-size: 0.32rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c3c3c3;
  color: #666;
 cursor: pointer;
}
</style>
