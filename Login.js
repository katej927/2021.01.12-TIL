import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <main>
          <section className="loginTitle">
            <p>로그인</p>
            <h1>Bang & Olaf 계정</h1>
          </section>
          <section className="inputBundle">
            <section className="emailBundle">
              <p>이메일</p>
              <input type="text" />
            </section>
            <section className="pwBundle">
              <p>비밀번호</p>
              <input type="text" />
            </section>
          </section>
          <section className="loginNewaccountPasswordBundle">
            <button>로그인</button>
            <p>회원가입</p>
            <p>비밀번호 찾기</p>
          </section>
        </main>
        <aside className="otherwayLoginBundle">
          <p>다른 서비스로 로그인</p>
          <button className="facebookBtn"></button>
          <button className="googleBtn"></button>
          <button className="naverBtn"></button>
        </aside>
        <footer></footer>
      </div>
    );
  }
}

export default Login;
