import { PostInfoContainer } from "./styles"

const PostInfo = () => {
  return (
    <PostInfoContainer>
      <img width={148} height={148} src="https://avatars.githubusercontent.com/u/15836394?v=4" alt="Person Photo" />
      <div>
        <header>
          <h1>Alexandre Soares</h1>
          <a href="https://github.com/assoares383" target="_blank" rel="noreferrer">
            GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
        <main>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas.
          Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        </main>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            assoares383
          </span>
          <span>
            <i className="fa-solid fa-building"></i>
            Comerc
          </span>
          <span>
            <i className="fa-solid fa-user-group"></i>
            21 Followers
          </span>
        </footer>
      </div>
    </PostInfoContainer>
  )
}

export { PostInfo }
