import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modal"
export default class extends Controller {
  // `connect()`はStimulusのライフサイクルコールバックの１つ
  // コントローラーがHTML要素にアタッチされたとき（=HTML要素が画面に表示されたとき）に実行される
  connect() {
    // モーダルを生成（グローバルのBootstrapを使用）
    this.modal = new bootstrap.Modal(this.element)

    // モーダルを表示する
    this.modal.show()
  }

  // アクション定義
  // 保存成功時にモーダルを閉じる
  close(event) {
    // event.detail.successは、レスポンスがが成功ならtrueを返す
    // バリデーションエラー時はモーダルを閉じたくないので、成功時のみ閉じる
    if (event.detail.success) {
      // モーダルを閉じる
      this.modal.hide()
    }
  }
}
