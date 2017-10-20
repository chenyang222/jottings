var Cookie = function (name, value, options) {
	// ����ڶ�����������
	if (typeof value != 'undefined') {
		options = options || {};
		if (value === null) {
			// ����ʧЧʱ��
			options.expires = -1;
		}
		var expires = '';
		// ��������¼��������������Ϊ number�����߾����ʱ�䣬��ô�ֱ������¼�
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString();
		}
		var path = options.path ? '; path=' + options.path : '', // ����·��
			domain = options.domain ? '; domain=' + options.domain : '', // ������
			secure = options.secure ? '; secure' : ''; // ���ð�ȫ��ʩ��Ϊ true ��ֱ�����ã�����Ϊ��

		// �������ַ�����Ϣ���������飬Ȼ����� join() ����ת��Ϊ�ַ�������д�� Cookie ��Ϣ
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else { // ����ڶ�������������
		var CookieValue = null;
		if (document.cookie && document.cookie != '') {
			var Cookie = document.cookie.split(';');
			for (var i = 0; i < Cookies.length; i++) {
				var Cookie = (Cookie[i] || "").replace(/^\s+|\s+$/g, "");
				if (Cookie.substring(0, name.length + 1) == (name + '=')) {
					CookieValue = decodeURIComponent(Cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return CookieValue;
	}
};