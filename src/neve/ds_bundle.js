/* @ds-bundle: {"format":3,"namespace":"NEVEDesignSystem_bf520b","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"2ff3e83c8bcd","components/actions/IconButton.jsx":"03dd0914dd78","components/display/Avatar.jsx":"6abaeec37c20","components/display/Card.jsx":"5fa439902b54","components/display/Tabs.jsx":"eab9ab338e70","components/feedback/Badge.jsx":"b054d6d4d465","components/feedback/Banner.jsx":"c5f3449167e0","components/feedback/Tag.jsx":"20c76d21230c","components/feedback/Tooltip.jsx":"be75c68116bf","components/forms/Checkbox.jsx":"2c40a1ff8156","components/forms/Input.jsx":"638cc0a9c0ba","components/forms/Radio.jsx":"8fcb4c1db681","components/forms/Select.jsx":"64bb322eddba","components/forms/Switch.jsx":"40671b28601c","components/forms/Textarea.jsx":"7634254c6d12","ui_kits/kit-runtime.js":"239039e804e6","ui_kits/portfolio/About.jsx":"52cd7890e18a","ui_kits/portfolio/CaseStudy.jsx":"2cfdceba3560","ui_kits/portfolio/Footer.jsx":"be3779d8cbd3","ui_kits/portfolio/Home.jsx":"d05922d24335","ui_kits/portfolio/Icons.jsx":"3a257deb14d6","ui_kits/portfolio/Nav.jsx":"88afbb68f817","ui_kits/portfolio/PortfolioApp.jsx":"bfbc5ae0746b","ui_kits/portfolio/Work.jsx":"a55046c1c531","ui_kits/portfolio/data.jsx":"0caff66f1986","ui_kits/studio/Inquiries.jsx":"0b76b5ba3885","ui_kits/studio/Overview.jsx":"05ae081942ce","ui_kits/studio/Projects.jsx":"b11f3bc13f16","ui_kits/studio/Sidebar.jsx":"7625f9b54dae","ui_kits/studio/StudioApp.jsx":"2e68b24087a3","ui_kits/studio/Topbar.jsx":"3354383ed378","ui_kits/studio/data.jsx":"76976cedac87","ui_kits/studio/icons.jsx":"62fbccfaddbb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NEVEDesignSystem_bf520b = window.NEVEDesignSystem_bf520b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NEVE Button — calm, editorial action. Square-ish soft corners, no bounce.
 * Variants: primary (ink navy), secondary (dust blue outline), ghost, accent (clay).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      height: 32,
      padding: '0 12px',
      font: 13,
      gap: 6
    },
    md: {
      height: 40,
      padding: '0 18px',
      font: 14,
      gap: 8
    },
    lg: {
      height: 48,
      padding: '0 24px',
      font: 16,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: 'var(--action-primary)',
      fg: 'var(--text-inverse)',
      border: 'transparent',
      bgHover: 'var(--action-primary-hover)'
    },
    secondary: {
      bg: 'transparent',
      fg: 'var(--neve-dust-blue)',
      border: 'var(--neve-dust-blue)',
      bgHover: 'rgba(76,107,138,0.08)'
    },
    ghost: {
      bg: 'transparent',
      fg: 'var(--text-primary)',
      border: 'transparent',
      bgHover: 'var(--surface-hover)'
    },
    accent: {
      bg: 'var(--action-accent)',
      fg: 'var(--text-inverse)',
      border: 'transparent',
      bgHover: '#CE6A50'
    }
  };
  const p = palettes[variant] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)',
      fontSize: s.font,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      color: disabled ? 'var(--text-muted)' : p.fg,
      background: disabled ? 'var(--surface-sunken)' : hover ? p.bgHover : p.bg,
      border: `1px solid ${disabled ? 'var(--border-default)' : p.border}`,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: active && !disabled ? 'scale(0.985)' : 'scale(1)',
      transition: 'var(--transition-fast)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.font + 4,
      height: s.font + 4
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.font + 4,
      height: s.font + 4
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NEVE IconButton — square, icon-only action. Subtle hover fill.
 */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const palettes = {
    ghost: {
      bg: 'transparent',
      fg: 'var(--text-secondary)',
      bgHover: 'var(--surface-hover)'
    },
    solid: {
      bg: 'var(--action-primary)',
      fg: 'var(--text-inverse)',
      bgHover: 'var(--action-primary-hover)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--text-primary)',
      bgHover: 'var(--surface-hover)',
      border: 'var(--border-default)'
    }
  };
  const p = palettes[variant] || palettes.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      color: disabled ? 'var(--text-muted)' : p.fg,
      background: disabled ? 'transparent' : hover ? p.bgHover : p.bg,
      border: `1px solid ${p.border || 'transparent'}`,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: active && !disabled ? 'scale(0.94)' : 'scale(1)',
      transition: 'var(--transition-fast)',
      padding: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
/** NEVE Avatar — initials or image, circular. */
function Avatar({
  name = '',
  src,
  size = 'md',
  style = {}
}) {
  const dims = {
    sm: 28,
    md: 40,
    lg: 56
  }[size] || 40;
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const fonts = {
    sm: 11,
    md: 15,
    lg: 20
  }[size] || 15;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--neve-dust-blue)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-body)',
      fontSize: fonts,
      fontWeight: 'var(--weight-semibold)',
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px rgba(15,23,42,0.06)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
/** NEVE Card — editorial container. Soft white surface, level-1 shadow, optional hover lift. */
function Card({
  children,
  title,
  eyebrow,
  meta,
  media,
  interactive = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: interactive && hover ? 'var(--shadow-3)' : 'var(--shadow-1)',
      border: '1px solid var(--border-default)',
      overflow: 'hidden',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-base)',
      ...style
    }
  }, media ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, media) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.2,
      color: 'var(--text-primary)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, children) : null, meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, meta) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
/** NEVE Tabs — underline tab bar. Calm slide between sections. */
function Tabs({
  tabs = [],
  active,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, tabs.map(t => {
    const isActive = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange && onChange(t.id),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        padding: '10px 14px',
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
        borderBottom: `2px solid ${isActive ? 'var(--neve-ink-navy)' : 'transparent'}`,
        transition: 'var(--transition-fast)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/** NEVE Badge — small status pill with tinted background. */
function Badge({
  children,
  tone = 'neutral',
  style = {}
}) {
  const tones = {
    neutral: {
      bg: 'var(--surface-sunken)',
      fg: 'var(--text-secondary)'
    },
    success: {
      bg: 'var(--feedback-success-bg)',
      fg: 'var(--feedback-success-fg)'
    },
    warning: {
      bg: 'var(--feedback-warning-bg)',
      fg: 'var(--feedback-warning-fg)'
    },
    error: {
      bg: 'var(--feedback-error-bg)',
      fg: 'var(--feedback-error-fg)'
    },
    info: {
      bg: 'var(--feedback-info-bg)',
      fg: 'var(--feedback-info-fg)'
    },
    ai: {
      bg: 'var(--feedback-ai-bg)',
      fg: 'var(--feedback-ai-fg)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 22,
      padding: '0 9px',
      borderRadius: 'var(--radius-full)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
/** NEVE Banner — full-width inline message. Calm tinted surface + accent rule. */
function Banner({
  children,
  title,
  tone = 'info',
  onClose,
  style = {}
}) {
  const tones = {
    info: {
      bg: 'var(--feedback-info-bg)',
      fg: 'var(--feedback-info-fg)',
      accent: 'var(--neve-info)'
    },
    success: {
      bg: 'var(--feedback-success-bg)',
      fg: 'var(--feedback-success-fg)',
      accent: 'var(--neve-success)'
    },
    warning: {
      bg: 'var(--feedback-warning-bg)',
      fg: 'var(--feedback-warning-fg)',
      accent: 'var(--neve-warning)'
    },
    error: {
      bg: 'var(--feedback-error-bg)',
      fg: 'var(--feedback-error-fg)',
      accent: 'var(--neve-error)'
    },
    ai: {
      bg: 'var(--feedback-ai-bg)',
      fg: 'var(--feedback-ai-fg)',
      accent: 'var(--neve-soft-lavender)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '14px 16px',
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      borderLeft: `3px solid ${t.accent}`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 'var(--weight-semibold)',
      color: t.fg,
      marginBottom: 2
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, children)), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      padding: 2,
      cursor: 'pointer',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))) : null);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
/** NEVE Tag — outlined chip for categories/filters; optionally removable. */
function Tag({
  children,
  removable = false,
  onRemove,
  active = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 12px',
      borderRadius: 'var(--radius-full)',
      background: active ? 'var(--surface-inverse)' : hover && onClick ? 'var(--surface-hover)' : 'transparent',
      color: active ? 'var(--text-inverse)' : 'var(--text-secondary)',
      border: `1px solid ${active ? 'transparent' : 'var(--border-default)'}`,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-fast)',
      ...style
    }
  }, children, removable ? /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** NEVE Tooltip — small dark label on hover/focus. */
function Tooltip({
  children,
  label,
  placement = 'top',
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[placement] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--weight-medium)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-2)',
      opacity: show ? 1 : 0,
      visibility: show ? 'visible' : 'hidden',
      transition: 'opacity var(--duration-fast) var(--ease-calm)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** NEVE Checkbox — square check with calm fill. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {}
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      background: checked ? 'var(--action-primary)' : 'var(--surface-card)',
      border: `1px solid ${checked ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      transition: 'var(--transition-fast)'
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-inverse)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NEVE Input — single-line text field. 44px tall, soft corners, calm focus ring.
 */
function Input({
  label,
  hint,
  error,
  icon = null,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--neve-error)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--size-input-h)',
      padding: '0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus && !error ? 'var(--ring-focus)' : 'none',
      transition: 'var(--transition-fast)'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)'
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--neve-error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** NEVE Radio — round single-choice control. */
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  id,
  style = {}
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: `1px solid ${checked ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      transition: 'var(--transition-fast)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--action-primary)'
    }
  }) : null), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value || true, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** NEVE Select — native select styled to match Input, with chevron. */
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  defaultValue,
  disabled = false,
  onChange,
  id,
  placeholder,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--neve-error)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--size-input-h)',
      padding: '0 36px 0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus && !error ? 'var(--ring-focus)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-fast)'
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--neve-error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** NEVE Switch — calm toggle. Slides, never bounces. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {}
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      flexShrink: 0,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--neve-moss-green)' : 'var(--neve-stone-grey)',
      position: 'relative',
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--neve-white)',
      boxShadow: 'var(--shadow-1)',
      transition: 'var(--transition-base)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** NEVE Textarea — multi-line field matching Input styling. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  value,
  defaultValue,
  placeholder,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--neve-error)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      padding: '12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus && !error ? 'var(--ring-focus)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      lineHeight: 1.5,
      color: 'var(--text-primary)',
      outline: 'none',
      transition: 'var(--transition-fast)'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--neve-error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kit-runtime.js
try { (() => {
/* NEVE UI-kit runtime.
   Loads component + screen .jsx sources, strips module syntax, transpiles once
   with Babel, and renders. This keeps kits self-contained so they render in the
   Design System tab AND when opened directly (no dependency on the virtual
   _ds_bundle.js, which is only injected by the DS tab). */
(function () {
  async function fetchText(path) {
    const r = await fetch(path, {
      cache: 'no-store'
    });
    if (!r.ok) throw new Error('Failed to load ' + path + ' (' + r.status + ')');
    return r.text();
  }
  function strip(src) {
    return src.replace(/^\s*import\s+[^;]*;?\s*$/gm, '').replace(/export\s+default\s+/g, '').replace(/export\s+(function|const|class)/g, '$1');
  }
  async function boot(opts) {
    const {
      sources = [],
      mount = 'App',
      root = 'root'
    } = opts;
    try {
      let bundle = '';
      for (const p of sources) {
        bundle += '\n/* ' + p + ' */\n' + strip(await fetchText(p));
      }
      bundle += '\nReactDOM.createRoot(document.getElementById(' + JSON.stringify(root) + ')).render(React.createElement(' + mount + '));\n';
      const out = Babel.transform(bundle, {
        presets: ['react'],
        filename: 'kit.jsx'
      }).code;
      new Function('React', 'ReactDOM', out)(window.React, window.ReactDOM);
    } catch (e) {
      document.getElementById(root).innerHTML = '<div style="font-family:system-ui;padding:40px;color:#b14a4a">Kit failed to load: ' + e.message + '</div>';
      console.error(e);
    }
  }
  window.NEVEKit = {
    boot
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kit-runtime.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
/* NEVE portfolio — About + Contact */
function About({
  contactRef
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: '72px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "neve-eyebrow"
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(36px,5vw,56px)',
      lineHeight: 1.08,
      color: 'var(--text-primary)',
      margin: '14px 0 0'
    }
  }, "Hi, I\u2019m Neve."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: 20
    }
  }, "I\u2019m a product and brand designer based in Lisbon. I\u2019ve spent twelve years helping health, finance and editorial teams ship calmer products. I care about typography, clear defaults, and design systems that a whole team can actually use."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: 16
    }
  }, "When I\u2019m not designing, I\u2019m usually reading, walking, or setting type for fun.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-section) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-lg)'
    }
  }, NEVE_SERVICES.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-primary)',
      margin: '0 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    ref: contactRef,
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: 'var(--space-page) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "neve-eyebrow"
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(28px,4vw,40px)',
      lineHeight: 1.15,
      color: 'var(--text-primary)',
      margin: '12px 0 8px'
    }
  }, "Have a project in mind?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-secondary)',
      margin: '0 0 28px'
    }
  }, "Tell me a little about it. I usually reply within a day."), sent ? /*#__PURE__*/React.createElement(Banner, {
    tone: "success",
    title: "Thanks \u2014 message sent"
  }, "I\u2019ll be in touch shortly at the email you provided.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "What can I help with?",
    placeholder: "Choose\u2026",
    options: [{
      value: 'product',
      label: 'Product design'
    }, {
      value: 'system',
      label: 'Design system'
    }, {
      value: 'brand',
      label: 'Brand & editorial'
    }]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Project",
    rows: 4,
    placeholder: "A sentence or two about the work"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrowRight, {
      size: 18
    })
  }, "Send message")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
/* NEVE portfolio — Case study detail */
function CaseStudy({
  slug,
  go,
  openProject
}) {
  const i = Math.max(0, NEVE_PROJECTS.findIndex(p => p.slug === slug));
  const p = NEVE_PROJECTS[i];
  const next = NEVE_PROJECTS[(i + 1) % NEVE_PROJECTS.length];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: '64px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('work'),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-secondary)',
      fontSize: 15,
      fontFamily: 'var(--font-body)',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(IconArrowLeft, {
    size: 16
  }), " Work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(40px,6vw,64px)',
      lineHeight: 1.05,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      margin: '20px 0 0'
    }
  }, p.summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '40px auto 0',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-2)'
    }
  }, /*#__PURE__*/React.createElement(Thumb, {
    colors: p.art,
    ratio: "16 / 8"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      padding: '40px 0',
      borderBottom: '1px solid var(--border-default)',
      marginTop: 8
    }
  }, [['Client', p.client], ['Role', p.role], ['Year', p.year]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 28,
      color: 'var(--text-primary)',
      margin: '0 0 12px'
    }
  }, "The brief"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "The product had grown by accretion \u2014 every team added a panel. People couldn\u2019t find the one thing they came to do. We started by removing, not adding: auditing every screen and asking what could leave."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 28,
      color: 'var(--text-primary)',
      margin: '36px 0 12px'
    }
  }, "What I did"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "I led design end to end \u2014 research synthesis, a token-based design system, and the core flows. We shipped in three releases, measuring task time after each.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      paddingBottom: 16
    }
  }, p.metrics.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, k))))), /*#__PURE__*/React.createElement("section", {
    onClick: () => openProject(next.slug),
    style: {
      cursor: 'pointer',
      marginTop: 56,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '36px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Next project"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      color: 'var(--text-primary)',
      marginTop: 6
    }
  }, next.title)), /*#__PURE__*/React.createElement(IconArrowRight, {
    size: 28,
    style: {
      color: 'var(--text-primary)'
    }
  }))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
/* NEVE portfolio — footer */
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      marginTop: 'var(--space-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-section) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-2xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      lineHeight: 1.1,
      marginBottom: 18
    }
  }, "Let\u2019s make something quiet\xA0and useful."), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@neve.studio",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-inverse)',
      textDecoration: 'none',
      fontSize: 18,
      borderBottom: '1px solid rgba(247,245,242,0.4)',
      paddingBottom: 2
    }
  }, /*#__PURE__*/React.createElement(IconMail, {
    size: 18
  }), " hello@neve.studio")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(247,245,242,0.5)'
    }
  }, "Elsewhere"), ['Read.cv', 'Are.na', 'Instagram', 'LinkedIn'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(247,245,242,0.82)',
      textDecoration: 'none',
      fontSize: 15
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(247,245,242,0.12)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'rgba(247,245,242,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Neve Larsen"), /*#__PURE__*/React.createElement("span", null, "Designed in the open")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
/* NEVE portfolio — Home */
function Home({
  go,
  openProject
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '88px var(--gutter) 64px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "neve-eyebrow"
  }, "Product & brand designer \xB7 Lisbon"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      fontSize: 'clamp(40px, 7vw, 88px)',
      lineHeight: 1.04,
      color: 'var(--text-primary)',
      margin: '18px 0 0',
      maxWidth: 14 + 'ch'
    }
  }, "I design calm, useful interfaces."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      maxWidth: '48ch',
      margin: '24px 0 0'
    }
  }, "I\u2019m Neve \u2014 I help teams ship products that feel quiet and obvious. Twelve years across health, finance and editorial."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('work'),
    iconRight: /*#__PURE__*/React.createElement(IconArrowRight, {
      size: 18
    })
  }, "See selected work"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => go('contact')
  }, "Get in touch"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 24,
      borderTop: '1px solid var(--border-default)',
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 28,
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('work'),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-secondary)',
      fontSize: 15,
      fontFamily: 'var(--font-body)'
    }
  }, "All projects ", /*#__PURE__*/React.createElement(IconArrowUpRight, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2xl)'
    }
  }, NEVE_PROJECTS.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.slug,
    onClick: () => openProject(p.slug),
    style: {
      cursor: 'pointer'
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector('.thumb').style.transform = 'scale(1.015)';
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector('.thumb').style.transform = 'scale(1)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumb",
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'var(--transition-base)',
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement(Thumb, {
    colors: p.art,
    label: p.title
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 18,
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, p.year)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      margin: '6px 0 10px'
    }
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: 'var(--space-page) var(--gutter) 0',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(28px,4vw,40px)',
      lineHeight: 1.2,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "I believe good design gets out of the way. Fewer decisions, made well."), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('about'),
    style: {
      marginTop: 20,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-link)',
      fontSize: 16,
      fontFamily: 'var(--font-body)',
      fontWeight: 500
    }
  }, "More about me ", /*#__PURE__*/React.createElement(IconArrowRight, {
    size: 16
  }))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Icons.jsx
try { (() => {
/* NEVE icons — Lucide path data, 1.75 stroke. */
function Icon({
  children,
  size = 20,
  stroke = 1.75,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, children);
}
const IconArrowUpRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 7h10v10"
}));
const IconArrowRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
}));
const IconArrowLeft = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M19 12H5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 19-7-7 7-7"
}));
const IconMail = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-10 5L2 7"
}));
const IconMenu = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 6h16M4 12h16M4 18h16"
}));
const IconX = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
/* NEVE portfolio — top navigation */
function Nav({
  route,
  go
}) {
  const links = [['work', 'Work'], ['about', 'About'], ['contact', 'Contact']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(247,245,242,0.82)',
      backdropFilter: 'saturate(180%) blur(12px)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      letterSpacing: '0.04em',
      color: 'var(--text-primary)'
    }
  }, "NEVE"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--neve-clay-orange)'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => go(id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: route === id ? 600 : 500,
      color: route === id ? 'var(--text-primary)' : 'var(--text-secondary)',
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)'
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border-default)',
      margin: '0 8px'
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--neve-success)',
      display: 'inline-block'
    }
  }), " Available"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/PortfolioApp.jsx
try { (() => {
/* NEVE portfolio — app shell + simple router */
function PortfolioApp() {
  const [route, setRoute] = React.useState('home'); // home | work | about | contact | project
  const [slug, setSlug] = React.useState(null);
  const go = r => {
    setRoute(r);
    window.scrollTo({
      top: 0
    });
  };
  const openProject = s => {
    setSlug(s);
    setRoute('project');
    window.scrollTo({
      top: 0
    });
  };
  let screen;
  if (route === 'home') screen = /*#__PURE__*/React.createElement(Home, {
    go: go,
    openProject: openProject
  });else if (route === 'work') screen = /*#__PURE__*/React.createElement(Work, {
    openProject: openProject
  });else if (route === 'project') screen = /*#__PURE__*/React.createElement(CaseStudy, {
    slug: slug,
    go: go,
    openProject: openProject
  });else screen = /*#__PURE__*/React.createElement(About, null); // about + contact

  const navRoute = route === 'project' ? 'work' : route;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    route: navRoute,
    go: go
  }), screen, /*#__PURE__*/React.createElement(Footer, {
    go: go
  }));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/PortfolioApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
/* NEVE portfolio — Work index with tag filter */
function Work({
  openProject
}) {
  const [filter, setFilter] = React.useState('All');
  const allTags = ['All', ...Array.from(new Set(NEVE_PROJECTS.flatMap(p => p.tags)))];
  const shown = filter === 'All' ? NEVE_PROJECTS : NEVE_PROJECTS.filter(p => p.tags.includes(filter));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "neve-eyebrow"
  }, "Work"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(36px,5vw,56px)',
      lineHeight: 1.08,
      color: 'var(--text-primary)',
      margin: '14px 0 0',
      maxWidth: '20ch'
    }
  }, "Twelve years of quiet, useful work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '32px 0 28px',
      flexWrap: 'wrap'
    }
  }, allTags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2xl)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.slug,
    onClick: () => openProject(p.slug),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement(Thumb, {
    colors: p.art,
    label: p.title
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 18,
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, p.client, " \xB7 ", p.year)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      margin: '6px 0 0'
    }
  }, p.summary)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.jsx
try { (() => {
/* NEVE portfolio — shared content + tonal placeholder art */

const NEVE_PROJECTS = [{
  slug: 'quiet-by-default',
  title: 'Quiet by Default',
  client: 'Aria Health',
  year: '2026',
  role: 'Product design, design system',
  tags: ['Product', 'Design system'],
  summary: 'A patient app redesign that removes noise so the next action is always obvious.',
  art: ['#4C6B8A', '#6B7F6B'],
  metrics: [['Task time', '−38%'], ['Support tickets', '−24%'], ['CSAT', '4.7 / 5']]
}, {
  slug: 'field-notes',
  title: 'Field Notes',
  client: 'Moss & Co.',
  year: '2025',
  role: 'Brand, art direction',
  tags: ['Brand', 'Editorial'],
  summary: 'An identity and editorial system for a studio that documents the outdoors.',
  art: ['#6B7F6B', '#F2C48D'],
  metrics: [['Launch', '2025'], ['Pages', '120+'], ['Formats', 'Print + web']]
}, {
  slug: 'slow-money',
  title: 'Slow Money',
  client: 'Ledger',
  year: '2025',
  role: 'Product design',
  tags: ['Product', 'Fintech'],
  summary: 'A budgeting tool that helps people decide less often, and better.',
  art: ['#0F172A', '#4C6B8A'],
  metrics: [['Retention', '+19%'], ['Onboarding', '3 steps'], ['NPS', '62']]
}, {
  slug: 'reading-room',
  title: 'Reading Room',
  client: 'Personal',
  year: '2024',
  role: 'Design + build',
  tags: ['Web', 'Type'],
  summary: 'A distraction-free reader with a typographic system that adapts to the text.',
  art: ['#B8B4D8', '#4C6B8A'],
  metrics: [['Type scale', 'Fluid'], ['Themes', '3'], ['Open source', 'Yes']]
}];
const NEVE_SERVICES = [['Product design', 'End-to-end interface design for web and mobile products — flows, screens, prototypes.'], ['Design systems', 'Tokens, components and the documentation that keeps a team consistent.'], ['Brand & editorial', 'Identity, type and the systems that carry a brand across surfaces.']];

/* Tonal placeholder art — swap for real imagery any time. */
function Thumb({
  colors = ['#4C6B8A', '#6B7F6B'],
  label,
  ratio = '16 / 10',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
      borderRadius: 'inherit',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 120% at 80% 0%, rgba(255,255,255,0.16), transparent 55%)'
    }
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 16,
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: 'rgba(255,255,255,0.92)'
    }
  }, label) : null);
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/Inquiries.jsx
try { (() => {
/* NEVE studio — Inquiries (master / detail) */
function Inquiries() {
  const [sel, setSel] = React.useState(0);
  const [replied, setReplied] = React.useState({});
  const q = STUDIO_INQUIRIES[sel];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-1)'
    }
  }, STUDIO_INQUIRIES.map((item, i) => {
    const active = i === sel;
    return /*#__PURE__*/React.createElement("button", {
      key: item.name,
      onClick: () => setSel(i),
      style: {
        display: 'flex',
        gap: 12,
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        padding: '14px 16px',
        border: 'none',
        borderBottom: '1px solid var(--border-default)',
        borderLeft: `3px solid ${active ? 'var(--neve-dust-blue)' : 'transparent'}`,
        background: active ? 'var(--surface-sunken)' : 'transparent',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: item.name,
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-primary)'
      }
    }, item.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, item.when)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, item.org, " \xB7 ", item.topic)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: q.name,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      color: 'var(--text-primary)'
    }
  }, q.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, q.org)), /*#__PURE__*/React.createElement(Tag, null, q.topic), /*#__PURE__*/React.createElement(Badge, {
    tone: replied[sel] ? 'success' : q.tone
  }, replied[sel] ? 'Replied' : q.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Hi Neve \u2014 we\u2019re a small team at ", q.org, " rethinking how our product feels. We loved \u201CQuiet by Default\u201D and would love to talk about ", q.topic.toLowerCase(), " for a Q3 launch. Are you taking on new work?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Reply",
    rows: 4,
    placeholder: `Write back to ${q.name.split(' ')[0]}…`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setReplied({
      ...replied,
      [sel]: true
    })
  }, "Send reply"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Schedule a call")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/Inquiries.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/Overview.jsx
try { (() => {
/* NEVE studio — Overview */
function StatCard({
  s
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, s.label), /*#__PURE__*/React.createElement(Badge, {
    tone: s.tone
  }, s.delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 40,
      lineHeight: 1.1,
      color: 'var(--text-primary)',
      marginTop: 10
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, s.sub));
}
function Sparkline() {
  const pts = [18, 22, 19, 28, 26, 34, 30, 42, 38, 48, 52, 60];
  const w = 100,
    h = 36,
    max = 64;
  const d = pts.map((p, i) => `${i / (pts.length - 1) * w},${h - p / max * h}`).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height: 56
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: d,
    fill: "none",
    stroke: "var(--neve-dust-blue)",
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Overview({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "ai",
    title: "Good morning, Neve"
  }, "You have 3 new inquiries and 2 drafts ready to publish."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, STUDIO_STATS.map(s => /*#__PURE__*/React.createElement(StatCard, {
    key: s.label,
    s: s
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Visitors"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'var(--neve-success)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(IcTrend, {
    size: 15
  }), " +12%")), /*#__PURE__*/React.createElement(Sparkline, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "Mar 8"), /*#__PURE__*/React.createElement("span", null, "Apr 6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Recent inquiries"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('inquiries'),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-link)',
      fontSize: 13,
      fontFamily: 'var(--font-body)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, "View all ", /*#__PURE__*/React.createElement(IcArrowUpRight, {
    size: 13
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, STUDIO_INQUIRIES.slice(0, 3).map(q => /*#__PURE__*/React.createElement("div", {
    key: q.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: q.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, q.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, q.topic)), /*#__PURE__*/React.createElement(Badge, {
    tone: q.tone
  }, q.status)))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/Projects.jsx
try { (() => {
/* NEVE studio — Projects table */
function Projects() {
  const [filter, setFilter] = React.useState('all');
  const rows = filter === 'all' ? STUDIO_PROJECTS : STUDIO_PROJECTS.filter(p => p.status.toLowerCase() === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'published',
      label: 'Published'
    }, {
      id: 'draft',
      label: 'Drafts'
    }],
    active: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1.4fr 1fr 0.8fr 0.8fr',
      gap: 16,
      padding: '14px 22px',
      borderBottom: '1px solid var(--border-default)',
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "Project"), /*#__PURE__*/React.createElement("span", null, "Client"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", null, "Views"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Updated")), rows.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1.4fr 1fr 0.8fr 0.8fr',
      gap: 16,
      padding: '16px 22px',
      alignItems: 'center',
      borderBottom: i < rows.length - 1 ? '1px solid var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, p.client), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone
  }, p.status)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.views), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      textAlign: 'right'
    }
  }, p.updated)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/Sidebar.jsx
try { (() => {
/* NEVE studio — sidebar */
function Sidebar({
  route,
  go
}) {
  const items = [['overview', 'Overview', IcOverview], ['projects', 'Projects', IcProjects], ['inquiries', 'Inquiries', IcInbox], ['journal', 'Journal', IcJournal], ['settings', 'Settings', IcSettings]];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-default)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: 'var(--neve-ink-navy)',
      color: 'var(--neve-warm-ivory)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 20
    }
  }, "N"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      letterSpacing: '0.03em',
      color: 'var(--text-primary)'
    }
  }, "NEVE"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'var(--text-muted)',
      fontWeight: 600,
      letterSpacing: '0.08em'
    }
  }, "STUDIO")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(([id, label, Ic]) => {
    const active = route === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => go(id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 10px',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        textAlign: 'left',
        background: active ? 'var(--surface-sunken)' : 'transparent',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        fontWeight: active ? 600 : 500,
        transition: 'color var(--duration-fast) var(--ease-calm)'
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 19,
      style: {
        color: active ? 'var(--neve-dust-blue)' : 'var(--text-muted)'
      }
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 14,
      background: 'var(--feedback-ai-bg)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--feedback-ai-fg)',
      marginBottom: 4
    }
  }, "Studio assistant"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.45,
      color: 'var(--text-secondary)'
    }
  }, "3 inquiries are waiting for a reply.")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/StudioApp.jsx
try { (() => {
/* NEVE studio — app shell */
function StudioApp() {
  const [route, setRoute] = React.useState('overview');
  const go = r => setRoute(r);
  const titles = {
    overview: 'Overview',
    projects: 'Projects',
    inquiries: 'Inquiries',
    journal: 'Journal',
    settings: 'Settings'
  };
  let screen;
  if (route === 'projects') screen = /*#__PURE__*/React.createElement(Projects, null);else if (route === 'inquiries') screen = /*#__PURE__*/React.createElement(Inquiries, null);else if (route === 'overview') screen = /*#__PURE__*/React.createElement(Overview, {
    go: go
  });else screen = /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      padding: 48,
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, titles[route]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15
    }
  }, "This section isn\u2019t part of the kit yet.")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    route: route,
    go: go
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: titles[route]
  }), screen));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/StudioApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/Topbar.jsx
try { (() => {
/* NEVE studio — topbar */
function Topbar({
  title
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 32px',
      borderBottom: '1px solid var(--border-default)',
      background: 'rgba(247,245,242,0.8)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IcSearch, {
    size: 16,
    style: {
      position: 'absolute',
      left: 12,
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search",
    style: {
      height: 38,
      width: 200,
      padding: '0 12px 0 34px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-card)',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(IcBell, {
    size: 18
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(IcPlus, {
      size: 16
    })
  }, "New project"), /*#__PURE__*/React.createElement(Avatar, {
    name: "Neve Larsen"
  })));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/data.jsx
try { (() => {
/* NEVE studio — sample data */
const STUDIO_STATS = [{
  label: 'Site visitors',
  value: '8,420',
  delta: '+12%',
  tone: 'success',
  sub: 'last 30 days'
}, {
  label: 'Project views',
  value: '3,114',
  delta: '+8%',
  tone: 'success',
  sub: 'last 30 days'
}, {
  label: 'New inquiries',
  value: '14',
  delta: '+5',
  tone: 'success',
  sub: 'this month'
}, {
  label: 'Avg. reply time',
  value: '7h',
  delta: '−2h',
  tone: 'info',
  sub: 'this month'
}];
const STUDIO_INQUIRIES = [{
  name: 'Mara Devlin',
  org: 'Tidewater',
  topic: 'Design system',
  when: '2h ago',
  status: 'New',
  tone: 'ai',
  initials: 'MD'
}, {
  name: 'Jonas Pyle',
  org: 'Northwind Health',
  topic: 'Product design',
  when: 'Yesterday',
  status: 'Replied',
  tone: 'success',
  initials: 'JP'
}, {
  name: 'Aria Quill',
  org: 'Self',
  topic: 'Brand & editorial',
  when: '2 days ago',
  status: 'New',
  tone: 'ai',
  initials: 'AQ'
}, {
  name: 'Felix Moss',
  org: 'Ledger',
  topic: 'Product design',
  when: '4 days ago',
  status: 'Scheduled',
  tone: 'warning',
  initials: 'FM'
}, {
  name: 'Tomas Frey',
  org: 'Are.na',
  topic: 'Design system',
  when: '1 week ago',
  status: 'Archived',
  tone: 'neutral',
  initials: 'TF'
}];
const STUDIO_PROJECTS = [{
  title: 'Quiet by Default',
  client: 'Aria Health',
  status: 'Published',
  tone: 'success',
  views: '1,204',
  updated: 'Apr 2'
}, {
  title: 'Field Notes',
  client: 'Moss & Co.',
  status: 'Published',
  tone: 'success',
  views: '842',
  updated: 'Mar 18'
}, {
  title: 'Slow Money',
  client: 'Ledger',
  status: 'Published',
  tone: 'success',
  views: '676',
  updated: 'Feb 27'
}, {
  title: 'Reading Room',
  client: 'Personal',
  status: 'Draft',
  tone: 'warning',
  views: '—',
  updated: 'Today'
}, {
  title: 'Untitled study',
  client: 'Hartwell',
  status: 'Draft',
  tone: 'warning',
  views: '—',
  updated: 'Today'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/icons.jsx
try { (() => {
/* NEVE studio — sidebar + ui icons (Lucide path data) */
function SIcon({
  children,
  size = 20,
  stroke = 1.75,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, children);
}
const IcOverview = p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "7",
  height: "9",
  rx: "1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "3",
  width: "7",
  height: "5",
  rx: "1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "12",
  width: "7",
  height: "9",
  rx: "1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "16",
  width: "7",
  height: "5",
  rx: "1"
}));
const IcProjects = p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}));
const IcInbox = p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M22 12h-6l-2 3h-4l-2-3H2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
}));
const IcJournal = p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
}));
const IcSettings = p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
}));
const IcSearch = p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 21-4.3-4.3"
}));
const IcBell = p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
}));
const IcPlus = p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M12 5v14"
}));
const IcTrend = p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M22 7 13.5 15.5 8.5 10.5 2 17"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 7h6v6"
}));
const IcArrowUpRight = p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 7h10v10"
}));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
