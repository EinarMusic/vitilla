<template>
    <div class="standing-table">
        <table>
            <thead>
                <tr><slot name="thead" /></tr>
            </thead>

            <tbody>
                <slot name="tbody" />
            </tbody>
        </table>
    </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;

  width: auto;
}
</style>