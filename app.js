const questions = [
  {
    id: "q1",
    topic: "WWWの構成要素",
    type: "multi",
    title: "WWWを構成する要素として、テキストに挙げられているものをすべて選びなさい。",
    options: [
      "クライアント：Webブラウザ、DNSクライアント",
      "サーバ：Webサーバ、アプリケーションサーバ、DNSサーバ",
      "ネットワーク：URL、HTTP、HTTPS、ポート番号、ドメイン名、IPアドレス",
      "プリンタ：印刷キュー、トナー、用紙サイズ"
    ],
    answer: [0, 1, 2],
    hint: "クライアント、サーバ、ネットワークに関する要素を探します。",
    explanation: "WWWはクライアント、サーバ、ネットワークに関する要素で成り立ちます。"
  },
  {
    id: "q2",
    topic: "フロントエンド / バックエンド",
    type: "single",
    title: "クライアント側を指す呼び方として正しいものはどれですか。",
    options: ["フロントエンド", "バックエンド", "ルートDNS", "セカンドレベルドメイン"],
    answer: 0,
    hint: "Webブラウザ側の処理を表す言葉です。",
    explanation: "クライアント側はフロントエンド、サーバ側はバックエンドと呼ばれることがあります。"
  },
  {
    id: "q3",
    topic: "Webブラウザの役割",
    type: "multi",
    title: "Webブラウザの役割として正しいものをすべて選びなさい。",
    options: [
      "指定されたURLから、リクエスト先のWebサーバと内容を決める",
      "HTTPの決まりに従ってWebサーバへリクエストを送る",
      "Webサーバからのレスポンスを受け取る",
      "受け取ったHTML、CSS、JavaScriptを解析して表示する",
      "DNSサーバの登録情報を全世界分管理する"
    ],
    answer: [0, 1, 2, 3],
    hint: "ブラウザがURLを受け取ってから画面表示するまでを追います。",
    explanation: "ブラウザはURLの解析、リクエスト送信、レスポンス受信、HTML/CSS/JavaScriptの解析と表示を担います。"
  },
  {
    id: "q4",
    topic: "Webサーバの役割",
    type: "multi",
    title: "Webサーバの役割として正しいものをすべて選びなさい。",
    options: [
      "リクエストの内容を解析する",
      "静的コンテンツの場合、対象データを探す",
      "動的コンテンツの場合、対象アプリケーションを呼ぶ",
      "HTTPの決まりに従ってレスポンス内容を組み立てる",
      "Webブラウザの画面レイアウトを直接クリック操作する"
    ],
    answer: [0, 1, 2, 3],
    hint: "サーバは受け取った要求に対して、探す・呼ぶ・組み立てる・返す動きをします。",
    explanation: "Webサーバはリクエスト解析、データ探索、アプリケーション呼び出し、レスポンス組み立てを行います。"
  },
  {
    id: "q5",
    topic: "アプリケーションサーバ",
    type: "single",
    title: "JavaのプログラムをWebサーバ内で動作させるために必要になるソフトウェアとして説明されているものはどれですか。",
    options: ["アプリケーションサーバ", "DNSクライアント", "トップレベルドメイン", "レスポンスヘッダ"],
    answer: 0,
    hint: "Apache Tomcatなどが例として挙げられる種類です。",
    explanation: "JavaのプログラムをWebサーバ内で動作させるには、アプリケーションサーバと呼ばれるソフトウェアが必要です。"
  },
  {
    id: "q6",
    topic: "URL",
    type: "single",
    title: "URLの説明として最も適切なものはどれですか。",
    options: [
      "インターネット上に存在する情報資源の場所を指し示すもの",
      "メール本文を暗号化するためだけの番号",
      "WebサーバのCPU使用率を表す値",
      "データベースの表名を必ず示すもの"
    ],
    answer: 0,
    hint: "Resource Locatorという言葉の意味を考えます。",
    explanation: "URLはUniform Resource Locatorの略で、情報資源の場所を指し示します。"
  },
  {
    id: "q7",
    topic: "URLの構成",
    type: "text",
    title: "例のURL「http://www.3sss.co.jp:80/shared_shop/hello.html」で、URIスキーム名にあたる部分を入力しなさい。",
    answer: ["http"],
    hint: "URLの先頭にあるプロトコル名と同じ名前です。",
    explanation: "URIスキーム名はURL先頭の「http」です。"
  },
  {
    id: "q8",
    topic: "URLの構成",
    type: "text",
    title: "例のURL「http://www.3sss.co.jp:80/shared_shop/hello.html」で、ポート番号にあたる数字を入力しなさい。",
    answer: ["80"],
    hint: "ドメイン名の後ろに「:」で続く数字です。",
    explanation: "ポート番号は「80」です。"
  },
  {
    id: "q9",
    topic: "URLの構成",
    type: "single",
    title: "「/shared_shop/hello.html」のように、閲覧したい情報を指定するものは何ですか。",
    options: ["パス名", "トップレベルドメイン", "ステータスメッセージ", "リクエストヘッダ"],
    answer: 0,
    hint: "フォルダ名とファイル名を組み合わせた場所として説明されています。",
    explanation: "パス名はWebサーバ内で閲覧したい情報を指定するものです。"
  },
  {
    id: "q10",
    topic: "URLの構成",
    type: "single",
    title: "「shared_shop」のように、Webアプリケーションを識別するための名前を何と呼びますか。",
    options: ["コンテキスト名", "ドキュメントルート", "レスポンス行", "User-Agent"],
    answer: 0,
    hint: "Webアプリケーションに関するひとまとまりの情報を表す名前です。",
    explanation: "Webアプリケーションを識別する名前をコンテキスト名、またはコンテキストパスと呼びます。"
  },
  {
    id: "q11",
    topic: "URLの構成",
    type: "single",
    title: "ドキュメントルートの説明として正しいものはどれですか。",
    options: [
      "Webサーバ内部のパスを管理していく際のルート、つまり頂点",
      "DNSで管理される最上位のドメイン",
      "レスポンスヘッダの最後に必ず入る空白行",
      "HTMLファイルの拡張子だけを集めた一覧"
    ],
    answer: 0,
    hint: "Webサーバ内部のファイル配置の基準点です。",
    explanation: "ドキュメントルートはWebサーバ内部のパスを管理する際のルートです。"
  },
  {
    id: "q12",
    topic: "DNSサーバ",
    type: "single",
    title: "DNSサーバの役割として正しいものはどれですか。",
    options: [
      "人間がわかりやすいドメイン名をIPアドレスに変換する",
      "HTMLをCSSに変換する",
      "ブラウザの履歴を自動削除する",
      "Javaプログラムをコンパイルする"
    ],
    answer: 0,
    hint: "ドメイン名だけではアクセスできないため、何に変換する必要があるか考えます。",
    explanation: "DNSサーバはドメイン名をIPアドレスに変換します。"
  },
  {
    id: "q13",
    topic: "DNSの階層",
    type: "single",
    title: "DNSは膨大な数のドメインを管理するため、どのような構造で管理されていますか。",
    options: ["ルートDNSを頂点とするツリー構造", "1台のDNSサーバだけで管理する構造", "全端末が同じ表を手入力する構造", "メールサーバだけが管理する構造"],
    answer: 0,
    hint: "図1-4の階層を見ます。",
    explanation: "DNSはルートDNSを頂点とするツリー構造で管理されています。"
  },
  {
    id: "q14",
    topic: "ドメイン",
    type: "single",
    title: "「jp」や「com」のようなドメインは何と呼ばれますか。",
    options: ["トップレベルドメイン", "サードレベルドメイン", "コンテキストルート", "メッセージボディ"],
    answer: 0,
    hint: "ドメイン階層の上位にある名前です。",
    explanation: "jpやcomなどはトップレベルドメインです。"
  },
  {
    id: "q15",
    topic: "セカンドレベルドメイン",
    type: "single",
    title: "表1-9で、大学・教育機関などの学校法人向けとされているセカンドレベルドメインはどれですか。",
    options: ["ac", "co", "go", "ne"],
    answer: 0,
    hint: "educationやacademicを連想すると探しやすいです。",
    explanation: "acは大学、教育機関などの学校法人向けです。"
  },
  {
    id: "q16",
    topic: "セカンドレベルドメイン",
    type: "single",
    title: "表1-9で、株式会社・有限会社などの企業向けとされているセカンドレベルドメインはどれですか。",
    options: ["ac", "co", "go", "ne"],
    answer: 1,
    hint: "companyを連想します。",
    explanation: "coは株式会社、有限会社などの企業向けです。"
  },
  {
    id: "q17",
    topic: "HTTPリクエスト",
    type: "single",
    title: "リクエスト内容の構成として正しい組み合わせはどれですか。",
    options: [
      "リクエスト行、リクエストヘッダ、メッセージボディ",
      "レスポンス行、レスポンスヘッダ、メッセージボディ",
      "トップレベル、セカンドレベル、サードレベル",
      "Webサーバ、アプリケーションサーバ、DBMS"
    ],
    answer: 0,
    hint: "図1-5の右側のラベルを確認します。",
    explanation: "リクエストはリクエスト行、リクエストヘッダ、メッセージボディで構成されます。"
  },
  {
    id: "q18",
    topic: "HTTPリクエスト",
    type: "single",
    title: "「GET /shared_shop/hello.html HTTP/1.1」のうち、GETが表すものは何ですか。",
    options: ["リクエストの方法", "リクエスト先のホスト名", "受信可能なデータ形式", "ステータスメッセージ"],
    answer: 0,
    hint: "リクエスト行の説明を見ます。",
    explanation: "GETはリクエストの方法を表します。"
  },
  {
    id: "q19",
    topic: "HTTPリクエスト",
    type: "single",
    title: "リクエストヘッダに含まれる情報として説明されているものはどれですか。",
    options: [
      "受信可能なデータ形式、リクエスト先のホスト名、ブラウザのバージョンなど",
      "ステータスコード200または404だけ",
      "データベースの表定義だけ",
      "サードレベルドメインだけ"
    ],
    answer: 0,
    hint: "Accept、Host、User-Agentなどの行を見ます。",
    explanation: "リクエストヘッダには、ブラウザが受信可能な形式、ホスト名、ブラウザ情報などが含まれます。"
  },
  {
    id: "q20",
    topic: "HTTPレスポンス",
    type: "single",
    title: "レスポンス内容の構成として正しい組み合わせはどれですか。",
    options: [
      "レスポンス行、レスポンスヘッダ、メッセージボディ",
      "リクエスト行、リクエストヘッダ、メッセージボディ",
      "URIスキーム、ドメイン名、パス名",
      "Webブラウザ、DNSクライアント、OS"
    ],
    answer: 0,
    hint: "図1-6のラベルを確認します。",
    explanation: "レスポンスはレスポンス行、レスポンスヘッダ、メッセージボディで構成されます。"
  },
  {
    id: "q21",
    topic: "HTTPレスポンス",
    type: "single",
    title: "データがあった場合のステータスコードとステータスメッセージの組み合わせとして正しいものはどれですか。",
    options: ["200 / OK", "404 / Not Found", "53 / DNS", "80 / HTTP"],
    answer: 0,
    hint: "レスポンス行の説明にある「データがあった場合」を見ます。",
    explanation: "データがあった場合はステータスコード200、ステータスメッセージOKです。"
  },
  {
    id: "q22",
    topic: "HTTPレスポンス",
    type: "single",
    title: "データがなかった場合のステータスコードとステータスメッセージの組み合わせとして正しいものはどれですか。",
    options: ["200 / OK", "404 / Not Found", "1521 / Oracle", "1.1 / HTTP"],
    answer: 1,
    hint: "Webページが見つからない時の代表的な番号です。",
    explanation: "データがなかった場合はステータスコード404、ステータスメッセージNot Foundです。"
  },
  {
    id: "q23",
    topic: "WebアプリケーションとDB",
    type: "single",
    title: "Webアプリケーションとデータベースの関係として、テキストの説明に近いものはどれですか。",
    options: [
      "多くのWebアプリケーションはデータベースなどのデータストアを利用する",
      "Webアプリケーションはデータベースを一切利用しない",
      "データベースは画像の色だけを管理する",
      "データベースはDNSサーバの別名である"
    ],
    answer: 0,
    hint: "商品検索や商品登録の例を思い出します。",
    explanation: "多くのWebアプリケーションはデータベースなどのデータストアを利用します。"
  },
  {
    id: "q24",
    topic: "SQL",
    type: "single",
    title: "商品を検索するWebサイトで、検索対象のデータを取り出す処理として例に挙げられているSQLはどれですか。",
    options: ["SELECT文", "INSERT文", "DELETE文", "COMMIT文"],
    answer: 0,
    hint: "検索するときに使うSQLです。",
    explanation: "商品検索ではSELECT文による検索が行われている例が挙げられています。"
  },
  {
    id: "q25",
    topic: "SQL",
    type: "single",
    title: "商品を1件新規登録する場合、テーブルに対して発行される例として挙げられているSQLはどれですか。",
    options: ["SELECT文", "INSERT文", "UPDATE文", "ROLLBACK文"],
    answer: 1,
    hint: "新しく追加する時に使うSQLです。",
    explanation: "商品を新規登録する場合、テーブルへのINSERT文が発行される例が挙げられています。"
  },
  {
    id: "q26",
    topic: "Web三層構造",
    type: "single",
    title: "Web三層構造で分けて稼働するものとして正しい組み合わせはどれですか。",
    options: [
      "Webサーバ、アプリケーションサーバ、データベースサーバ",
      "ブラウザ、キーボード、マウス",
      "HTML、CSS、画像ファイル",
      "トップレベル、セカンドレベル、サードレベル"
    ],
    answer: 0,
    hint: "図1-8の3つのサーバを見ます。",
    explanation: "Web三層構造ではWebサーバ、アプリケーションサーバ、データベースサーバが役割を分担します。"
  },
  {
    id: "q27",
    topic: "Web三層構造のメリット",
    type: "multi",
    title: "Web三層構造やサーバ分離のメリットとして挙げられているものをすべて選びなさい。",
    options: [
      "パフォーマンス、メンテナンス性の向上",
      "複数のシステムからも参照できる",
      "単純な負荷分散",
      "管理のしやすさ",
      "すべての処理を必ず1台のPCに集約できる"
    ],
    answer: [0, 1, 2, 3],
    hint: "データベースサーバを独立させるメリットと、Webサーバとアプリケーションサーバを分けるメリットを両方見ます。",
    explanation: "データベースサーバの独立、Webサーバとアプリケーションサーバの分離には、性能・保守性・参照性・負荷分散・管理性のメリットがあります。"
  },
  {
    id: "q28",
    topic: "全体理解",
    type: "single",
    title: "ブラウザでURLを指定してから画面表示されるまでの流れとして最も自然なものはどれですか。",
    options: [
      "URL解析 → DNSでIPアドレス取得 → HTTPリクエスト送信 → サーバがレスポンス作成 → ブラウザが表示",
      "DNSでHTMLを作成 → DBMSがURLを表示 → ブラウザがポート番号を削除",
      "レスポンスヘッダ作成 → トップレベルドメイン登録 → GETを削除",
      "データベース検索 → DNS階層を作成 → URLを手書きで保存"
    ],
    answer: 0,
    hint: "15〜27ページの要素を、実際のアクセス順に並べます。",
    explanation: "URL解析、DNSによる名前解決、HTTPリクエスト、サーバのレスポンス、ブラウザ表示という流れが自然です。"
  }
];

const form = document.querySelector("#quizForm");
const resultPanel = document.querySelector("#resultPanel");
const scoreText = document.querySelector("#scoreText");
const countText = document.querySelector("#countText");
const gradeButton = document.querySelector("#gradeButton");
const resetButton = document.querySelector("#resetButton");

countText.textContent = `${questions.length}問`;

function normalizeText(value) {
  return String(value || "")
    .trim()
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
    .replace(/\s+/g, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderQuestion(question, index) {
  const article = document.createElement("article");
  article.className = "question-card";
  article.id = question.id;
  article.innerHTML = `
    <div class="question-topline">
      <span class="number">${index + 1}</span>
      <span class="topic">${escapeHtml(question.topic)}</span>
    </div>
    <h3 class="question-title">${escapeHtml(question.title)}</h3>
    <div class="answer-area"></div>
    <p class="hint" id="${question.id}-hint"></p>
  `;

  const area = article.querySelector(".answer-area");
  if (question.type === "text") {
    const input = document.createElement("input");
    input.className = "text-answer";
    input.type = "text";
    input.name = question.id;
    input.autocomplete = "off";
    input.placeholder = "答えを入力";
    area.append(input);
  } else {
    const options = document.createElement("div");
    options.className = "options";
    question.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option";
      label.innerHTML = `
        <input type="${question.type === "multi" ? "checkbox" : "radio"}" name="${question.id}" value="${optionIndex}">
        <span>${escapeHtml(option)}</span>
      `;
      options.append(label);
    });
    area.append(options);
  }
  form.append(article);
}

questions.forEach(renderQuestion);

function getUserAnswer(question) {
  if (question.type === "text") {
    return document.querySelector(`[name="${question.id}"]`).value;
  }
  return [...document.querySelectorAll(`[name="${question.id}"]:checked`)].map((input) => Number(input.value));
}

function isCorrect(question, answer) {
  if (question.type === "text") {
    const normalized = normalizeText(answer);
    return question.answer.some((candidate) => normalizeText(candidate) === normalized);
  }
  if (question.type === "single") {
    return answer.length === 1 && answer[0] === question.answer;
  }
  if (question.type === "multi") {
    const expected = [...question.answer].sort((a, b) => a - b);
    const actual = [...answer].sort((a, b) => a - b);
    return expected.length === actual.length && expected.every((value, index) => value === actual[index]);
  }
  return false;
}

function answerToText(question, answer) {
  if (question.type === "text") return answer || "未入力";
  return answer.map((index) => question.options[index]).join("、") || "未選択";
}

function correctAnswerText(question) {
  if (question.type === "text") return question.answer.join(" / ");
  if (question.type === "single") return question.options[question.answer];
  return question.answer.map((index) => question.options[index]).join("、");
}

async function gradeQuiz() {
  let correctCount = 0;
  const wrongNumbers = [];

  questions.forEach((question, index) => {
    const card = document.querySelector(`#${question.id}`);
    const hint = document.querySelector(`#${question.id}-hint`);
    const answer = getUserAnswer(question);
    const ok = isCorrect(question, answer);

    card.classList.toggle("correct", ok);
    card.classList.toggle("incorrect", !ok);
    hint.textContent = ok ? `正解：${question.explanation}` : `見直しヒント：${question.hint}`;

    if (ok) {
      correctCount += 1;
    } else {
      wrongNumbers.push(index + 1);
    }
  });

  scoreText.textContent = `${correctCount} / ${questions.length}`;
  resultPanel.className = "result-panel show";

  if (correctCount === questions.length) {
    const docxBlob = await createDocxBlob();
    const url = URL.createObjectURL(docxBlob);
    const filename = "Webアプリケーション概要_確認問題_解答.docx";
    resultPanel.classList.add("success");
    resultPanel.innerHTML = `
      <h2>おめでとうございます。満点です。</h2>
      <p>全問正解しました。問題と解答をまとめたdocxファイルを作成しました。</p>
      <a class="download-link" id="downloadDocx" href="${url}" download="${filename}">docxをダウンロード</a>
    `;
    document.querySelector("#downloadDocx").click();
  } else {
    resultPanel.classList.add("retry");
    resultPanel.innerHTML = `
      <h2>まだ終了できません</h2>
      <p>${wrongNumbers.length}問見直しが必要です。間違えた問題：${wrongNumbers.join("、")}</p>
      <p>各問題のヒントを見て、テキスト該当ページを確認してからもう一度採点してください。</p>
    `;
    const firstWrong = document.querySelector(`#${questions[wrongNumbers[0] - 1].id}`);
    firstWrong?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function resetQuiz() {
  form.reset();
  document.querySelectorAll(".question-card").forEach((card) => {
    card.classList.remove("correct", "incorrect");
  });
  document.querySelectorAll(".hint").forEach((hint) => {
    hint.textContent = "";
  });
  scoreText.textContent = "未採点";
  resultPanel.className = "result-panel";
  resultPanel.innerHTML = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

gradeButton.addEventListener("click", gradeQuiz);
resetButton.addEventListener("click", resetQuiz);

function crc32(bytes) {
  let table = crc32.table;
  if (!table) {
    table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[i] = c >>> 0;
    }
    crc32.table = table;
  }
  let crc = 0xffffffff;
  for (const byte of bytes) crc = table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date = new Date()) {
  const time =
    (date.getHours() << 11) |
    (date.getMinutes() << 5) |
    Math.floor(date.getSeconds() / 2);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = Math.max(1980, date.getFullYear()) - 1980;
  const dosDate = (year << 9) | (month << 5) | day;
  return { time, date: dosDate };
}

function u16(value) {
  return [value & 0xff, (value >>> 8) & 0xff];
}

function u32(value) {
  return [value & 0xff, (value >>> 8) & 0xff, (value >>> 16) & 0xff, (value >>> 24) & 0xff];
}

function makeZip(files) {
  const encoder = new TextEncoder();
  const chunks = [];
  const central = [];
  let offset = 0;
  const stamp = dosDateTime();

  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const data = encoder.encode(file.content);
    const crc = crc32(data);
    const localHeader = new Uint8Array([
      ...u32(0x04034b50),
      ...u16(20),
      ...u16(0x0800),
      ...u16(0),
      ...u16(stamp.time),
      ...u16(stamp.date),
      ...u32(crc),
      ...u32(data.length),
      ...u32(data.length),
      ...u16(nameBytes.length),
      ...u16(0)
    ]);
    chunks.push(localHeader, nameBytes, data);

    const centralHeader = new Uint8Array([
      ...u32(0x02014b50),
      ...u16(20),
      ...u16(20),
      ...u16(0x0800),
      ...u16(0),
      ...u16(stamp.time),
      ...u16(stamp.date),
      ...u32(crc),
      ...u32(data.length),
      ...u32(data.length),
      ...u16(nameBytes.length),
      ...u16(0),
      ...u16(0),
      ...u16(0),
      ...u16(0),
      ...u32(0),
      ...u32(offset)
    ]);
    central.push(centralHeader, nameBytes);
    offset += localHeader.length + nameBytes.length + data.length;
  });

  const centralSize = central.reduce((sum, part) => sum + part.length, 0);
  const end = new Uint8Array([
    ...u32(0x06054b50),
    ...u16(0),
    ...u16(0),
    ...u16(files.length),
    ...u16(files.length),
    ...u32(centralSize),
    ...u32(offset),
    ...u16(0)
  ]);

  const totalSize =
    chunks.reduce((sum, part) => sum + part.length, 0) +
    centralSize +
    end.length;
  const zip = new Uint8Array(totalSize);
  let cursor = 0;
  [...chunks, ...central, end].forEach((part) => {
    zip.set(part, cursor);
    cursor += part.length;
  });
  return zip;
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function paragraph(text, style = "") {
  const styleXml = style ? `<w:pPr><w:pStyle w:val="${style}"/></w:pPr>` : "";
  return `<w:p>${styleXml}<w:r><w:t>${xmlEscape(text)}</w:t></w:r></w:p>`;
}

function createDocumentXml() {
  const body = [];
  body.push(paragraph("Webアプリケーション概要 確認問題 解答", "Title"));
  body.push(paragraph("テキスト15〜27ページ対応。満点後に生成された解答ファイルです。"));
  questions.forEach((question, index) => {
    body.push(paragraph(`${index + 1}. ${question.title}`, "Heading1"));
    body.push(paragraph(`分野：${question.topic}`));
    body.push(paragraph(`正答：${correctAnswerText(question)}`));
    body.push(paragraph(`解説：${question.explanation}`));
  });
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    ${body.join("\n")}
    <w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/></w:sectPr>
  </w:body>
</w:document>`;
}

function createDocxBlob() {
  const files = [
    {
      name: "[Content_Types].xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`
    },
    {
      name: "_rels/.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`
    },
    {
      name: "word/document.xml",
      content: createDocumentXml()
    },
    {
      name: "word/styles.xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:rPr><w:b/><w:sz w:val="36"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:rPr><w:b/><w:sz w:val="26"/></w:rPr></w:style>
</w:styles>`
    }
  ];
  return new Blob([makeZip(files)], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  });
}
