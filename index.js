const farmAnimals = 'cow horse sheep pig chicken'
// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
// expect(moo).to.equal("cow")
// expect(neigh).to.exist
// expect(neigh).to.equal("horse")
// expect(baa).to.exist
// expect(baa).to.equal("sheep")
// expect(oink).to.exist
// expect(oink).to.equal("pig")
// expect(cluck).to.exist
// expect(cluck).to.equal("chicken")
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.
const[Bessie, , Dolly, Babe, Little] = farmAnimals.split(' ')

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.
const[black_and_white, , black, pink, ] = farmAnimals.split(' ')

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// expect(r).to.exist
// expect(r).to.equal("red")
// expect(o).to.exist
// expect(o).to.equal("orange")
// expect(y).to.exist
// expect(y).to.equal("yellow")
// expect(g).to.exist
// expect(g).to.equal("green")
// expect(b).to.exist
// expect(b).to.equal("blue")
// expect(v).to.exist
// expect(v).to.equal("violet")
// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, , v] = colors

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const [ , , , , , indg, ] = colors

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};
// 7. Use destructuring to assign all appropriate variables using the keys as the variable names
const { name, color, song, job, partner} = muppet

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song_2, song_4 } = k_muppet.k_album.the_muppet_movie
const { k_job, k_partner, k_color } = k_muppet