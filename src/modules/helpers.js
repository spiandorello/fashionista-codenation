/**
 *
 * @param {string} id
 * @param {array} list
 * @returns {*}
 */
export const getContentNameById = (id = '', list = []) => {
  if (!id && list.length === 0) {
    return '';
  }

  const { name = '' } = list.find(item =>  id === item.id) || '';

  return name;
}

export const slugify = (slug) =>
{
  return slug.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}