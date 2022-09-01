<template>
  <div class="card row" :class="status">
    <div class="row">
      <div class="column">
        <div class="row" style="font-weight: bold;">{{course}}</div>
        <div class="row" style="margin-bottom: 1em; font-size: 0.85em;">{{discipline}} - {{description}}</div>
        <div class="row">
          <el-tag :type="tagType">{{prettyStatus}}</el-tag>
        </div>
      </div>
    </div>
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
      status: String,
      description: String
    },
    computed: {
      prettyStatus: function () {
        switch(this.status) {
          case 'pending':
            return 'Em lançamento';
          case 'late':
            return 'Aguardando lançamento';
          case 'done':
            return 'Finalizado';
          default:
            return 'Aguardando lançamento'
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
  background-color: #ffffff;
  margin: 0.5em 1em 0.5em 1em;
  padding: 16px;
}

.pending {
  border-left: 5px solid #F5B845;
}

.done {
  border-left: 5px solid #30B565;
}

.late {
  border-left: 5px solid #E84521;
}

.not-started {
  border-left: 5px solid #C8D0D8;
}


</style>
