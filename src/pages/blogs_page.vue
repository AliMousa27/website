<template>
  <div class="container scrollable-content text-center" id="scrollable_div">
    <BlogCard
      ><h2>Chess AI</h2>
      <p>
        I play chess fairly frequently as it's a very fun pass time that's
        actually stimulating and I've always been fascinated by chess engines
        such as Leela Chess Zero and Stockfish and therefore I decided to
        attempt to make an AI that could play chess. I coded the actual chess
        game in python using pygame where this task was rather trivial as it
        took me around 4 days to finish the game and move generation alongside
        the rules and win conditions. I started researching how actual chess
        engines work and it turns out chess programming is a deeper rabbit hole
        than I could have ever imagined, where people came up with extremely
        craft solutions to optimize the most popular algorithm; alpha beta
        pruning search. I did not want to create an algorithm as its actual
        implementation is rather easy but the difficulty stems from efficient
        move generation. However my focus was on the AI aspect, therefore I
        omitted using any algorithms in my attempt to create a chess AI. The
        first step to train any AI is to acquire high quality and a large
        quantity of data. Thankfully, millions of games are available on Lichess
        where each game is played with a move and a stockfish evaluation of each
        move made by each player. I parsed and cleaned the data to a json format
        of FEN string that represents the board alongside the evaluation made by
        stockfish
        <br />
        <img :src="require('@/assets/chess/data.png')" />
        My approach is thinking of chess as an image recognition problem.
        Players subconsciously omit many options on the board based on how
        disadvantageous a move is, so I thought AI could probably do the same.
        Therefore I a convolutional neural network would be perfect for this
        case Where I would pass the image through a convolutional block that
        would look through patterns in the board followed by a residual tower
        that is a list of residual blocks to solve the vanishing gradient
        problem and for better accuracy.
        <br />
        <img :src="require('@/assets/chess/conv.png')" />
        Then the output is passed to a fully connected linear layer that
        produces a single float as the prediction of the board between -1 and 1,
        where -1 is in favor of black and 1 is in favor of white
        <br />
        <img :src="require('@/assets/chess/model.png')" />
        So in theory the model could play every move and choose the one that has
        the highest evaluation The model is fed a tensor representation of the
        board of 12 planes where each plane represents the piece's position
        alongside the weighted value assigned. I also did a lot of hyper
        parameter tuning like optimizer scheduler, changing the learning rate
        etc to try to get the best results.
        <img :src="require('@/assets/chess/board_tensor_ex.png')" />
        and heres the code that does that
        <img :src="require('@/assets/chess/board_tensor_code.png')" />
        The first plane represents black prawns with weight 0.1 for example, the
        second plane is knights so on and so forth. However, here's the problem.
        The loss was still far too high for my liking at an average of +-60-70
        <img :src="require('@/assets/chess/loss.png')" />
        So I had the AI make every single move, add them to a dictionary and
        choose the move with the corresponding highest evaluation but the AI
        blunders far too much especially in regards to the queen. The AI liked
        to play a lot with the queen which put her in vulnerable positions to be
        captured and consequently it lost against me 2 out of the 3 games i
        played against it. Therefore it's not good at all, sadly. But the
        journey of using my knowledge about ai and learning about convolutional
        networks and data parsing and cleaning was extremely fun actually
      </p></BlogCard
    >

    <BubblesBackground :add_gap_circle="false" />
  </div>
  <PageFooter />
</template>

<script setup>
import BlogCard from "../components/blogs_components/blog_card.vue";
import BubblesBackground from "../components/shared_components/bubbles_background.vue";
import PageFooter from "../components/shared_components/footer.vue";
</script>

<script>
export default {
  name: "BlogsPage",
  components: {
    BlogCard,
    BubblesBackground,

    PageFooter,
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  gap: 30px;
  overflow-x: hidden;
  overflow-y: scroll;
}

p,
h2,
h6 {
  color: rgb(204, 196, 196);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
h2 {
  font-size: 30px;
  color: #c1cccc;
}

p {
  font-size: 22px;
}

@media (max-width: 786px) {
  p {
    font-size: 18px;
  }
  h2 {
    font-size: 24px;
  }
  .blod_card {
    max-width: 100vh;
  }
}
img {
  margin-top: 30px;
  margin-bottom: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
}

.scrollable-content {
  height: 100vh;
  overflow-y: scroll !important;
  -ms-overflow-style: none;
  scrollbar-width: none;

  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}
</style>
