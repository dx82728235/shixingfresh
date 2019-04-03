<template>
  <div class="pro-section">
    <div class="pro-container">
      <div class="floor-padding intersection-card">
        <div class="intersection-card-item">
          <div class="freshes-image intersection-adv-item">
            <img
              class="freshes-image-source"
              src="http://pic2.34580.cn/group1/M00/96/C9/wKgNY1yh4HmAMxH0AAGBRI7ELE888.jpeg"
            >
          </div>
          <div class="freshes-image intersection-adv-item">
            <img
              class="freshes-image-source"
              src="http://pic2.34580.cn/group1/M00/96/C9/wKgNY1yh4HmAMxH0AAGBRI7ELE888.jpeg"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.floor-padding {
  padding: 0.1rem 0.2rem;
}
.intersection-card {
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.02);
  overflow: hidden;
}
.intersection-card-item {
  display: flex;
  padding: 0;
}
.freshes-image {
  border-radius: 0.25rem;
}
.freshes-image-source {
  width: 100%;
}
.pro-section {
  width: 100%;
  .pro-container {
    width: 100%;
    .intersection-card {
      .intersection-card-item {
        .freshes-image:first-child {
          margin-right: 0.07rem;
        }
        .freshes-image:last-child {
          margin-left: 0.07rem;
        }
      }
    }
  }
}
</style>