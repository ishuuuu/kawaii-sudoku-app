// 数独パズルを生成するユーティリティ関数

/**
 * 数独パズルとその解答を生成する
 * @param {string} difficulty - 難易度 ('easy', 'medium', 'hard')
 * @returns {Object} puzzle と solution を含むオブジェクト
 */
export const generateSudoku = (difficulty) => {
  // 完成した数独ボードを生成
  const solution = generateSolvedBoard();
  
  // 難易度に応じた空白マスの数を決定
  let emptyCellsCount;
  switch (difficulty) {
    case 'easy':
      emptyCellsCount = 30; // 約33%が空白
      break;
    case 'medium':
      emptyCellsCount = 40; // 約44%が空白
      break;
    case 'hard':
      emptyCellsCount = 50; // 約56%が空白
      break;
    default:
      emptyCellsCount = 30;
  }
  
  // パズルを作成（解答から特定のセルを空にする）
  const puzzle = createPuzzleFromSolution(solution, emptyCellsCount);
  
  return { puzzle, solution };
};

/**
 * 解かれた数独ボードを生成する
 * @returns {Array} 9x9の解かれた数独ボード
 */
const generateSolvedBoard = () => {
  // 空のボードを作成
  const board = Array(9).fill().map(() => Array(9).fill(0));
  
  // バックトラッキングで数独を解く
  solveBoard(board);
  
  return board;
};

/**
 * バックトラッキングアルゴリズムを使用して数独ボードを解く
 * @param {Array} board - 9x9の数独ボード
 * @returns {boolean} 解くことができたかどうか
 */
const solveBoard = (board) => {
  // 空のセルを見つける
  const emptyCell = findEmptyCell(board);
  
  // 空のセルがなければ解決完了
  if (!emptyCell) {
    return true;
  }
  
  const [row, col] = emptyCell;
  
  // 1から9までの数字をランダムな順序で試す
  const numbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  for (const num of numbers) {
    // その数字が妥当か確認
    if (isValidPlacement(board, row, col, num)) {
      board[row][col] = num;
      
      // 再帰的に解く
      if (solveBoard(board)) {
        return true;
      }
      
      // 解けなかった場合、バックトラック
      board[row][col] = 0;
    }
  }
  
  return false;
};

/**
 * 数独ボード内の空のセルを見つける
 * @param {Array} board - 9x9の数独ボード
 * @returns {Array|null} 空のセルの [row, col] または null
 */
const findEmptyCell = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
};

/**
 * 指定されたセルに数字を配置できるか検証する
 * @param {Array} board - 9x9の数独ボード
 * @param {number} row - 行インデックス
 * @param {number} col - 列インデックス
 * @param {number} num - 配置する数字
 * @returns {boolean} 配置が有効かどうか
 */
const isValidPlacement = (board, row, col, num) => {
  // 行チェック
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) {
      return false;
    }
  }
  
  // 列チェック
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) {
      return false;
    }
  }
  
  // 3x3ボックスチェック
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === num) {
        return false;
      }
    }
  }
  
  return true;
};

/**
 * 配列をランダムにシャッフルする
 * @param {Array} array - シャッフルする配列
 * @returns {Array} シャッフルされた新しい配列
 */
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * 解答から指定された数のセルを空にしてパズルを作成
 * @param {Array} solution - 9x9の解かれた数独ボード
 * @param {number} emptyCellsCount - 空にするセルの数
 * @returns {Array} 生成されたパズル
 */
const createPuzzleFromSolution = (solution, emptyCellsCount) => {
  const puzzle = solution.map(row => [...row]);
  const positions = [];
  
  // 全セルの位置を収集
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      positions.push([row, col]);
    }
  }
  
  // 位置をランダムにシャッフル
  const shuffledPositions = shuffleArray(positions);
  
  // 指定された数のセルを空にする
  for (let i = 0; i < emptyCellsCount && i < shuffledPositions.length; i++) {
    const [row, col] = shuffledPositions[i];
    puzzle[row][col] = 0;
  }
  
  return puzzle;
};