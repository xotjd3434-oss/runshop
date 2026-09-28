import React, { useState } from 'react'


function ProductDetail({ image, onAddCart, onOpenModal }) {
  //현재 선택된 탭을 저장
  //처음에는 detail탭이 선택되어있음
  const [tab, setTab] = useState('detail');

  return (
    <section className='product'>
      {/* 상품 이미지 영역 */}
      <div className="product-media">
        <img
          src={image}
          alt="러닝슈즈"
          onClick={onOpenModal}
          title="클릭하면 확대 이미지를 볼 수 있습니다."
        />
      </div>

      {/* 상품설명 */}
      <div className="product-body">
        <p className="category">RUNNING SHOES</p>
        <h2>러닝 슈즈</h2>
        <p className="desc">가볍고 편안한 데일리 러닝 슈즈</p>
        <p className="price">59,000원</p>
        <div className="actions">
          <button className='btn primary' onClick={onAddCart}>
            장바구니담기
          </button>
          <button className="btn" onClick={onOpenModal}>이미지확대</button>
        </div>
        {/* 탭버튼 */}
        <div className="tabs">
          <button
            className={tab === 'detail' ? 'tab active' : 'tab'}
            onClick={() => setTab('detail')}
          >
            상세
          </button>

          <button
            className={tab === 'review' ? 'tab active' : 'tab'}
            onClick={() => setTab('review')}
          >
            리뷰
          </button>

          <button
            className={tab === 'qna' ? 'tab active' : 'tab'}
            onClick={() => setTab('qna')}
          >
            문의
          </button>
        </div >

        {/* 선택된 탭 값에 따라서 보여지는 콘텐츠 */}
        <div className="tab-panel">
          {
            tab === 'detail' && (
              <ul className="bullets">
                <li>가벼운 쿠셔닝으로 장시간 러닝에 적합</li>
                <li>통기성이 좋은 매쉬 소재</li>
                <li>일상과 가벼운 운동에 편안한 착화감</li>
              </ul>
            )
          }

          {
            tab === 'review' && (
              <div>
                <p className='review-score'>⭐⭐⭐⭐⭐</p>
                <p>"가볍고 오래 걸어도 편해요"</p>
                <p>"제 친구 다혜가 너무 좋아해요"</p>
              </div>
            )
          }

          {
            tab === 'qna' && (
              <div>
                <p><b>Q.</b>방수가 되나요</p>
                <p><b>A.</b>가벼운 생활 방수는 가능합니다.</p>
                <p></p>
              </div>
            )
          }
        </div>

      </div >
    </section >
  )
}

export default ProductDetail