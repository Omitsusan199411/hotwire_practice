import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  submit() {
    clearTimeout(this.timeout)

    // Timeoutをセットする（デバウンス処理を追加）
    // 3000ms以内に連続で入力したものだけ、まとめて１回のリクエストとして実行する
    // 連続でrequestSubmitを実行しないようにする
    this.timeout = setTimeout(() => {
      this.element.requestSubmit();
    }, 3000)
  }
}
