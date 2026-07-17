// ============================================================
// 과제 13. 성적 계산기
//
// index.html의 "성적 계산기" 버튼을 누르면 calculateGrade()가 실행됩니다.
// 3과목 점수를 연속으로 입력받아 총점, 평균, 합격 여부, 등급을 계산합니다.
// ============================================================

function calculateGrade() {
  // 배열(Array): 여러 값을 순서대로 담아두는 목록입니다. 대괄호 [ ]로 만듭니다. (과제 13 요구사항)
  var subjects = ["HTML", "CSS", "JavaScript"];

  // 점수를 계속 더해 나갈 변수입니다. 0에서 시작해야 더하기가 맞습니다. (과제 13 요구사항)
  var total = 0;

  // for문: 정해진 횟수만큼 반복합니다. (과제 13 요구사항)
  for (var i = 0; i < subjects.length; i++) {
    // 과목 이름을 문장에 끼워 넣어 물어봅니다. (과제 13 요구사항)
    var input = prompt(subjects[i] + " 점수를 입력하세요.");

    if (input === null) {
      alert("성적 계산을 취소했습니다.");
      return;
    }

    var score = Number(input);

    if (isNaN(score) || score < 0 || score > 100) {
      alert("0부터 100 사이의 숫자만 입력할 수 있어요. 처음부터 다시 시작해 주세요.");
      return;
    }

    // 입력받은 점수를 총점에 더합니다. (과제 13 요구사항)
    total = total + score;
  }

  // 반복문이 끝난 뒤 평균을 구합니다. 총점 ÷ 과목 수 (과제 13 요구사항)
  var average = total / subjects.length;

  var result;
  if (average >= 60) {
    result = "합격입니다!";
  } else {
    result = "불합격입니다.";
  }

  var grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  alert("총점: " + total + "점, 평균: " + average + ", 결과: " + result + "\n등급: " + grade);
}
