<script>
    export let count = 0
    export let onClick = () => {}
</script>

<button on:click={onClick}>
    count is {count}
</button>