import React from 'react'

export default function Signup() {
    return (
      <div class="container con">
        {/* <div class="row">
          <div class="panel panel-primary">
            <div class="panel-body"> */}

        <div class="form-group">
          <h2>Create account</h2>
        </div>
        <form>
          <div class="card" Style="width:40em">
            <div class="form-group bg-info p-0">
              <label class="control-label" for="signupName">
                Your name
              </label>
              <input
                id="signupName"
                type="text"
                maxlength="50"
                class="form-control"
              />
            </div>
            <div class="form-group p-0">
              <label class="control-label" for="signupEmail">
                Email
              </label>
              <input
                id="signupEmail"
                type="email"
                maxlength="50"
                class="form-control"
              />
            </div>
            <div class="form-group p-0">
              <label class="control-label" for="signupEmailagain">
                Email again
              </label>
              <input
                id="signupEmailagain"
                type="email"
                maxlength="50"
                class="form-control"
              />
            </div>
            <div class="form-group p-0">
              <label class="control-label" for="signupPassword">
                Password
              </label>
              <input
                id="signupPassword"
                type="password"
                maxlength="25"
                class="form-control"
                placeholder="at least 6 characters"
                length="40"
              />
            </div>
            <div class="form-group p-0">
              <label class="control-label" for="signupPasswordagain">
                Password again
              </label>
              <input
                id="signupPasswordagain"
                type="password"
                maxlength="25"
                class="form-control"
              />
            </div>
            <div class="form-group p-0">
              <button
                id="signupSubmit"
                type="submit"
                class="btn btn-info btn-block"
              >
                Create your account
              </button>
            </div>
            <p class="form-group p-0">
              By creating an account, you agree to our{" "}
              <a href=".">Terms of Use</a> and our{" "}
              <a href=".">Privacy Policy</a>.
            </p>
            <hr />
            <p>
              Already have an account? <a href=".">Sign in</a>
            </p>
          </div>
        </form>

        {/* </div>
       </div> */}
      </div>
    );
}
