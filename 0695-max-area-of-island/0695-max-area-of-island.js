/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let answer = 0;
    let n = grid.length;
    let m = grid[0].length;

    const travel = (i,j) => {
        if(i<0 || j < 0 || i >= n || j >= m || !grid[i][j]){
            return 0
        }
        grid[i][j] = 0
        return 1 + travel(i-1,j) + travel(i, j-1) + travel( i+1,j) + travel(i,j+1)
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j]){
                answer = Math.max(answer, travel(i,j))
            }
        }
    }
    return answer;
};