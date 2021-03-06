import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'
// import Routes from './routes'


import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Home from './containers/Home'
import Routes from './routes'
import VideoIndex from './components/videos/VideoIndex'
import VideoEdit from './components/videos/VideoEdit'
import VideoForm from './components/videos/VideoForm'
import VideoNew from './components/videos/VideoNew'
import VideoShow from './components/videos/VideoShow'
import AddContainer from './containers/Add'
import DeleteVideo from './components/videos/VideoIndex'
import VideoCarousel from './components/videos/VideoCarousel'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/videos' render={() => (<DeleteVideo flash={this.flash} user={user} /> )}
          />
          <AuthenticatedRoute user={user} exact path='/videos/new' render={() => (<VideoNew flash={this.flash} user={user} /> )}
          />
          <AuthenticatedRoute user={user} exact path='/videos/:id/edit' render={() => (<VideoEdit flash={this.flash} user={user} /> )}
          />
          <AuthenticatedRoute user={user} exact path='/videos/:id/show' render={() => (<VideoShow flash={this.flash} user={user} /> )}
          />
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <Route path='/' render={() => (
            <AddContainer flash={this.flash} setUser={this.setUser} />)}
          />
        </main>
      </React.Fragment>

    )
  }
}

export default App
