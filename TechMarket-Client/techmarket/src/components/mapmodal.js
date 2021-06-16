import React, { useState } from "react";
import "../styles/mapmodal.css";
import Kakaomap from "../pages/Kakaomap";

const Modal = ( props ) => {
    const [Place, setPlace] = useState('')
    const [InputText, setInputText] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText)
        setInputText('')
      }
      const onChange = (e) => {
        setInputText(e.target.value)
      }

    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                        <Kakaomap className="kakaoMap" searchPlace={Place}/>
                        <form className="modal-search-box" onSubmit={handleSubmit}>
                            <input className="modal-search-word" placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
                            <button className="modal-search-button" type="submit">검색</button>
                        </form>
                    </main>
                    <footer>
                        <button className="close" onClick={close}> close </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;