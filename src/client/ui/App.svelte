<script>
  let counter = 0;
  const addToCounter = () => {
    counter += 1;
  }
</script>


<div >
  <h1>Welcome to Meteor!</h1>

  <button class="btn" on:click={addToCounter}>Click Me</button>
  <p>You've pressed the button {counter} times.</p>

  <h2>Learn Meteor!</h2>
  <ul>
    <li><a href="https://svelte-tutorial.meteor.com/" target="_blank">Do the Tutorial</a></li>
    <li><a href="http://guide.meteor.com" target="_blank">Follow the Guide</a></li>
    <li><a href="https://docs.meteor.com" target="_blank">Read the Docs</a></li>
    <li><a href="https://forums.meteor.com" target="_blank">Discussions</a></li>
  </ul>
</div>
