# Welcome to Tic Tac Tactics

## This is a WebApp project fully designed, produced, and styled by Charlie Simms.
It is a single-page web-app, using Ruby on Rails and React.js with Flux organization.

The inspiration for this project came from Lichess.org, the free Correspondence Chess site. The original idea was to copy Lichess more directly, but as the planning phase started the project migrated towards a more original look and feel.

### Current Functionality Highlights

- Hand-rolled User Authentication using BCrypt
- Single Page Application, using React with Flux
- The illusion and convenience of multiple pages using React-Router
- Asynchronous HTTP requests using jQuery's Ajax
- Users can challenge other Users or the Computer
- Leave current game at anytime, every submitted move is saved to the db
- Users can open any previous game, to view the ending state of the game

### Features of Note

These are some things that I took a particular joy in building.

#### Lacing Ruby game logic into the backend

I wrote out Tic Tac Toe in Ruby and integrated it's logic into the Game Model. Keeping the logic for a board separated from the model really made this functionality attractive and intuitive to build. Each Game row in the database has a column moveset, which is saved as a JSON string. When needed, The JSON is parsed into an Array of Ruby Hashes. The moveset is used to build a Board Object that matches the state of the current game. The new move is made to the Board object, and finally the Game Model modifies the moveset as necessary before re-packaging it back into a JSON string to be sent back to the client. Lots of moving parts, very fun to design and build.

```ruby
def make_move(move)
  if self.build_game && @board.place_mark(move['pos'], move['mark'])
    self.update_moveset(move)
    self.correct_status
    self.computer_move(move['mark']) if self.winner == 'f'
    true
  else
    nil
  end
end

def build_game
  moves = JSON.parse(self.moveset)
  @board = Board.new
  moves.each do |move|
    return nil unless @board.place_mark(move['pos'], move['mark'])
  end
end

def update_moveset(move)
  moves = JSON.parse(self.moveset)
  self.moveset = JSON.generate(moves.push(move))
end
```

#### React Tabs

Stealing a page out of Lichess' book, I decided the home page should have tabs at the top of the page to navigate between a couple related components. This actually wasn't too hard to implement, especially with a helper component. Essentially the Tabs are one component that have state of which tab is currently selected. The parent component passes Tabs it's content (more components) as props. The Tab headers have an onClick callback that will change the state of selectedPane, causing the Tabs to re-render and display the correct pane. To me, this is pretty impressive functionality for 60 lines of readable code.

Passing the child components as props is straightforward and easy to add more as you please.

```javascript
<Tabs panes={
    [{
        title: 'Human Games',
        content: <GameIndex category='human'/>
    },{
        title: 'Computer Games',
        content: <GameIndex category='computer'/>
    },{
        title: 'Players',
        content: <UserIndex />
    }]
} />
```

How they look in the browser

![tabs](https://github.com/cssimms/tictactactics/blob/master/docs/tabs_screen.png)

#### Flux-y Game Play

Though it wasn't strictly necessary, I wanted to make the frontend as inline with the Flux data flow as possible. This lead to some fairly complicated Flux Loops, which where at first hard to keep track of, but ultimately really fun to implement.

For the process of selecting a submitting a move, there are
-click game cell
-game client actions select move
-



### Bonus Features
- [ ] Integrate pusher, for immediate response when it's player's turn
- [ ] User Rankings
- [ ] Animated gameplay
- [ ] Puzzles for your TTT training
- [ ] Flush out stats for each user, win %
- [ ] Live games
- [ ] Sign in Button changes to user dropdown menu on login
