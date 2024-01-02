export const iterate_phi = (a, b, x, y, z, max_iterations = 100) => {
  try {
    a = parseFloat(a);
    b = parseFloat(b);
    x = parseFloat(x);
    y = parseFloat(y);
    z = parseFloat(z);
  } catch (error) {
    return 'Please enter valid numbers.';
  }

  const initial_phi = 30.0;
  let phi = initial_phi * (Math.PI / 180);  // Convert initial_phi to radians
  let N = null;
  let h = null;
  let lamda = null;
  let perv_phi = null;
  let result_text = "";

  for (let i = 1; i <= max_iterations; i++) {
    result_text += '='.repeat(30) + `\nIteration: ${i}\n` + '-'.repeat(15) + '\n';
    const e = parseFloat((a ** 2 - b ** 2) / a ** 2).toFixed(12);
    N = parseFloat(a / Math.sqrt(1 - e * (Math.sin(phi) ** 2))).toFixed(3);
    h = parseFloat((Math.sqrt(x ** 2 + y ** 2) / Math.cos(phi)) - N).toFixed(3);

    if (i === 1) {
      lamda = (Math.atan2(y, x) * 180 / Math.PI).toFixed(6);
      result_text += `lamda: ${lamda}\n`;
    }

    const new_phi = (Math.atan(z / (Math.sqrt(x ** 2 + y ** 2) / (1 - e * (N / (N + h))))) * 180 / Math.PI).toFixed(6);

    result_text += `N: ${N} m\nh: ${h} m\nphi: ${new_phi}\n`;

    if (new_phi !== perv_phi) {
      phi = Math.atan(z / (Math.sqrt(x ** 2 + y ** 2) / (1 - e * (N / (N + h)))));
      perv_phi = new_phi;
    } else {
      result_text += '='.repeat(30) + '\nIteration stopped. phi is equal to perv_phi.\n';
      break;
    }
  }

  return result_text;
};
