<template>
  <div>
    <table class="center">
      <tr>
        <th>Projektnr</th>
        <th>Titel</th>
      </tr>
      <tr>
        <td>
          <input type="text" />
        </td>
        <td>
          <input type="text" />
        </td>
      </tr>
    </table>
    <table class="center">
      <tr>
        <td style="width: 10%">Neu</td>
        <td style="width: 30%">von</td>
        <td style="width: 30%">bis</td>
        <td style="width: 15%">Typ</td>
        <td style="width: 15%">Status</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <input type="date" />
        </td>
        <td>
          <input type="date" />
        </td>
        <td>
          <select />
        </td>
        <td>
          <select />
        </td>
      </tr>
    </table>
    <table class="center">
      <tr>
        <td style="width: 10%">GBL</td>
        <td style="width: 10%">PM</td>
        <td style="width: 10%">PL</td>
        <td style="width: 70%">Kunde</td>
      </tr>
      <tr>
        <td>
          <select />
        </td>
        <td>
          <select />
        </td>
        <td>
          <select />
        </td>
        <td colspan="2">
          <input type="text" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
table {
  width: 800px;
  height: 70px;
}
</style>