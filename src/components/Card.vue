<template>
  <div class="card row">
    <!-- lado esquerdo -->
    <div class="row">
      <div class="column">
        <div style="justify-content:  ">{{course}}</div>
        <div class="">{{discipline}}</div>
        <div class="row">
          <el-tag :type="tagType">{{prettyStatus}}</el-tag>
        </div>
      </div>
    </div>
    <!-- lado direito -->
    <div class="row" style="align-items: center">
      <el-icon>
        <ArrowRight/>
      </el-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Clickable-Card',
    props: {
      course: String,
      discipline: String,
      id: String,
      status: String
    },
    computed: {
      prettyStatus: function () {
        switch(this.status) {
          case 'pending':
            return 'em lançamento';
          case 'late':
            return 'Atrasado';
          case 'done':
            return 'Finalizado';
        
          default:
            return 'info'
        }
      },
      tagType: function () {
        switch(this.status) {
          case 'pending':
            return 'warning';
          case 'late':
            return 'danger';
          case 'done':
            return 'success';
          default:
            return 'info'
        }
      }

    }
  }
</script>

<style scoped>
.card {
  flex: 1 1 auto;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #30B565;
  margin: 0.5em 0 0.5em 0;
  padding: 16px
}



</style>
