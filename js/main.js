
document.getElementById("psiInput").addEventListener("input", function(e) {
  let psi = e.target.value;
  //meters
  document.getElementById("psiMeter").value = psi;
  document.getElementById("barMeter").value = psi / 14.504;
  document.getElementById("kgMeter").value = psi / 14.223;
  //outputs
  document.getElementById("psiOutput").innerHTML = psi;
  document.getElementById("barOutput").innerHTML = Math.round( psi / 14.504 * 10 ) / 10;
  document.getElementById("kgcmOutput").innerHTML = Math.round( psi / 14.223 * 10 ) / 10;
});
