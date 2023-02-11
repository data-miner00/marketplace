<script>
    export let count = 0
    export let onClick = () => {}
</script>

<button on:click={onClick} class="mb-5">
    count is {count}
</button>
